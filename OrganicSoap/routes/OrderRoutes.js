const express = require('express');
const { z } = require('zod');
const validate = require('../middleware/validate');
const { protect, authorize } = require('../middleware/Auth');
const { createOrder, getMyOrders, getMyOrder, getAllOrders, updateOrderStatus } = require('../controllers/orderC');

const router = express.Router();
const shippingAddress = z.object({ name: z.string().trim().min(2).max(100), phone: z.string().trim().min(6).max(30), addressLine: z.string().trim().min(5).max(300), city: z.string().trim().min(2).max(100), state: z.string().trim().min(2).max(100), pincode: z.string().trim().min(3).max(20) }).strict();
const orderInput = z.object({ items: z.array(z.object({ productId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid product id'), quantity: z.coerce.number().int().min(1).max(20) }).strict()).min(1).max(20), shippingAddress, notes: z.string().trim().max(500).optional() }).strict().refine((data) => new Set(data.items.map((item) => item.productId)).size === data.items.length, { message: 'Each product can appear only once in an order', path: ['items'] });
router.post('/', protect, validate(orderInput), createOrder);
router.get('/my', protect, getMyOrders);
router.get('/my/:id', protect, getMyOrder);
router.get('/', protect, authorize('admin'), getAllOrders);
router.patch('/:id/status', protect, authorize('admin'), validate(z.object({ status: z.enum(['confirmed', 'processing', 'shipped', 'delivered', 'cancelled']) }).strict()), updateOrderStatus);
module.exports = router;
