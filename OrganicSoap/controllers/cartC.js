const mongoose = require('mongoose');
const Cart = require('../models/cartM');
const Product = require('../models/productM');

async function getCart(req, res, next) { try { const cart = await Cart.findOne({ user: req.user.id }).populate('items.product', 'name slug images price discounted_price isActive inStock'); res.json(cart || { user: req.user.id, items: [] }); } catch (error) { next(error); } }
async function addItem(req, res, next) {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findOne({ _id: productId, isActive: true });
    if (!product) return res.status(404).json({ message: 'Product not found or unavailable' });
    if (quantity > product.inStock) return res.status(409).json({ message: 'Requested quantity is not available' });
    let cart = await Cart.findOne({ user: req.user.id });
    if (!cart) cart = new Cart({ user: req.user.id, items: [] });
    const item = cart.items.find((entry) => entry.product.toString() === productId);
    if (item) item.quantity = Math.min(item.quantity + quantity, 20); else cart.items.push({ product: productId, quantity });
    const finalItem = cart.items.find((entry) => entry.product.toString() === productId);
    if (finalItem.quantity > product.inStock) return res.status(409).json({ message: 'Requested quantity is not available' });
    await cart.save();
    cart = await cart.populate('items.product', 'name slug images price discounted_price isActive inStock');
    res.status(200).json(cart);
  } catch (error) { next(error); }
}
async function updateItem(req, res, next) { if (!mongoose.Types.ObjectId.isValid(req.params.productId)) return res.status(400).json({ message: 'Invalid product id' }); try { const product = await Product.findById(req.params.productId); if (!product || !product.isActive) return res.status(404).json({ message: 'Product not found or unavailable' }); if (req.body.quantity > product.inStock) return res.status(409).json({ message: 'Requested quantity is not available' }); const cart = await Cart.findOne({ user: req.user.id }); if (!cart) return res.status(404).json({ message: 'Cart not found' }); const item = cart.items.find((entry) => entry.product.toString() === req.params.productId); if (!item) return res.status(404).json({ message: 'Item not found in cart' }); item.quantity = req.body.quantity; await cart.save(); res.json(await cart.populate('items.product', 'name slug images price discounted_price isActive inStock')); } catch (error) { next(error); } }
async function removeItem(req, res, next) { if (!mongoose.Types.ObjectId.isValid(req.params.productId)) return res.status(400).json({ message: 'Invalid product id' }); try { const cart = await Cart.findOneAndUpdate({ user: req.user.id }, { $pull: { items: { product: req.params.productId } } }, { new: true }).populate('items.product', 'name slug images price discounted_price isActive inStock'); if (!cart) return res.status(404).json({ message: 'Cart not found' }); res.json(cart); } catch (error) { next(error); } }
async function clearCart(req, res, next) { try { await Cart.findOneAndUpdate({ user: req.user.id }, { $set: { items: [] } }); res.status(204).send(); } catch (error) { next(error); } }
module.exports = { getCart, addItem, updateItem, removeItem, clearCart };
