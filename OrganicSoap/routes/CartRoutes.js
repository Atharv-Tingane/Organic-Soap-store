const express = require('express');
const { z } = require('zod');
const validate = require('../middleware/validate');
const { protect } = require('../middleware/Auth');
const { getCart, addItem, updateItem, removeItem, clearCart } = require('../controllers/cartC');

const router = express.Router();
const itemInput = z.object({ productId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid product id'), quantity: z.coerce.number().int().min(1).max(20) }).strict();
const quantityInput = z.object({ quantity: z.coerce.number().int().min(1).max(20) }).strict();
router.use(protect);
router.get('/', getCart);
router.post('/items', validate(itemInput), addItem);
router.patch('/items/:productId', validate(quantityInput), updateItem);
router.delete('/items/:productId', removeItem);
router.delete('/', clearCart);
module.exports = router;
