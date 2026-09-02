const mongoose = require('mongoose');
const User = require('../models/userM');
const Order = require('../models/orderM');
const Product = require('../models/productM');

const pagination = (req) => { const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1); const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 20, 1), 100); return { page, limit, skip: (page - 1) * limit }; };
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function dashboard(req, res, next) {
  try {
    const [totalUsers, totalOrders, pendingOrders, lowStockProducts, deliveredSales, orderStatus] = await Promise.all([
      User.countDocuments({ role: 'user' }),
      Order.countDocuments(),
      Order.countDocuments({ status: { $in: ['pending', 'confirmed', 'processing'] } }),
      Product.countDocuments({ isActive: true, inStock: { $lte: 5 } }),
      Order.aggregate([{ $match: { status: 'delivered' } }, { $group: { _id: null, total: { $sum: '$total' } } }]),
      Order.aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }]),
    ]);
    res.json({ totalUsers, totalOrders, pendingOrders, lowStockProducts, deliveredRevenue: deliveredSales[0]?.total || 0, ordersByStatus: Object.fromEntries(orderStatus.map((entry) => [entry._id, entry.count])) });
  } catch (error) { next(error); }
}
async function getUsers(req, res, next) { try { const { page, limit, skip } = pagination(req); const filter = { role: 'user' }; if (req.query.search) { const pattern = new RegExp(escapeRegex(req.query.search.trim()), 'i'); filter.$or = [{ name: pattern }, { email: pattern }, { phone: pattern }]; } if (req.query.active === 'true') filter.isActive = true; if (req.query.active === 'false') filter.isActive = false; const [users, total] = await Promise.all([User.find(filter).select('-password').sort({ createdAt: -1 }).skip(skip).limit(limit), User.countDocuments(filter)]); res.json({ users, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }); } catch (error) { next(error); } }
async function getUserDetail(req, res, next) { if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid user id' }); try { const [user, orders] = await Promise.all([User.findOne({ _id: req.params.id, role: 'user' }).select('-password'), Order.find({ user: req.params.id }).sort({ createdAt: -1 }).limit(20)]); if (!user) return res.status(404).json({ message: 'User not found' }); res.json({ user, recentOrders: orders }); } catch (error) { next(error); } }
async function updateUserStatus(req, res, next) { if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid user id' }); if (req.params.id === req.user.id) return res.status(400).json({ message: 'You cannot change your own account status' }); try { const user = await User.findOneAndUpdate({ _id: req.params.id, role: 'user' }, { isActive: req.body.isActive }, { new: true, runValidators: true }).select('-password'); if (!user) return res.status(404).json({ message: 'User not found' }); res.json({ user }); } catch (error) { next(error); } }
module.exports = { dashboard, getUsers, getUserDetail, updateUserStatus };
