const mongoose = require('mongoose');
const Order = require('../models/orderM');
const Product = require('../models/productM');
const User = require('../models/userM');

const roundMoney = (value) => Math.round((value + Number.EPSILON) * 100) / 100;
const orderNumber = () => `ORD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
const pagination = (req) => { const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1); const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 20, 1), 100); return { page, limit, skip: (page - 1) * limit }; };

async function createOrder(req, res, next) {
  const session = await mongoose.startSession();
  try {
    let order;
    await session.withTransaction(async () => {
      const items = [];
      for (const item of req.body.items) {
        const product = await Product.findOneAndUpdate(
          { _id: item.productId, isActive: true, inStock: { $gte: item.quantity } },
          { $inc: { inStock: -item.quantity } },
          { new: true, session }
        );
        if (!product) { const error = new Error('One or more products are unavailable or out of stock'); error.statusCode = 409; throw error; }
        const unitPrice = product.discounted_price ?? product.price;
        const lineTotal = roundMoney(unitPrice * item.quantity);
        items.push({ product: product._id, name: product.name, slug: product.slug, image: product.images[0] || null, unitPrice, quantity: item.quantity, lineTotal });
      }
      const subtotal = roundMoney(items.reduce((sum, item) => sum + item.lineTotal, 0));
      order = await Order.create([{ orderNumber: orderNumber(), user: req.user.id, items, shippingAddress: req.body.shippingAddress, subtotal, shippingFee: 0, total: subtotal, payment: { method: 'COD', status: 'pending' }, notes: req.body.notes }], { session });
      order = order[0];
      await User.findByIdAndUpdate(req.user.id, { $inc: { totalOrders: 1 } }, { session });
    });
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) { next(error); } finally { await session.endSession(); }
}

async function getMyOrders(req, res, next) { try { const { page, limit, skip } = pagination(req); const filter = { user: req.user.id }; const [orders, total] = await Promise.all([Order.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit), Order.countDocuments(filter)]); res.json({ orders, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }); } catch (error) { next(error); } }
async function getMyOrder(req, res, next) { if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid order id' }); try { const order = await Order.findOne({ _id: req.params.id, user: req.user.id }); if (!order) return res.status(404).json({ message: 'Order not found' }); res.json(order); } catch (error) { next(error); } }
async function getAllOrders(req, res, next) { try { const { page, limit, skip } = pagination(req); const filter = req.query.status ? { status: req.query.status } : {}; const [orders, total] = await Promise.all([Order.find(filter).populate('user', 'name email phone').sort({ createdAt: -1 }).skip(skip).limit(limit), Order.countDocuments(filter)]); res.json({ orders, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }); } catch (error) { next(error); } }

const transitions = { pending: ['confirmed', 'cancelled'], confirmed: ['processing', 'cancelled'], processing: ['shipped', 'cancelled'], shipped: ['delivered'], delivered: [], cancelled: [] };
async function updateOrderStatus(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid order id' });
  const session = await mongoose.startSession();
  try {
    let order;
    await session.withTransaction(async () => {
      order = await Order.findById(req.params.id).session(session);
      if (!order) { const error = new Error('Order not found'); error.statusCode = 404; throw error; }
      const nextStatus = req.body.status;
      if (!transitions[order.status].includes(nextStatus)) { const error = new Error(`Cannot change an order from ${order.status} to ${nextStatus}`); error.statusCode = 409; throw error; }
      if (nextStatus === 'cancelled') {
        await Promise.all(order.items.map((item) => Product.updateOne({ _id: item.product }, { $inc: { inStock: item.quantity } }, { session })));
      }
      order.status = nextStatus;
      await order.save({ session });
    });
    res.json(order);
  } catch (error) { next(error); } finally { await session.endSession(); }
}
module.exports = { createOrder, getMyOrders, getMyOrder, getAllOrders, updateOrderStatus };
