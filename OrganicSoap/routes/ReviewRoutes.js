const express = require('express');
const { z } = require('zod');
const validate = require('../middleware/validate');
const { protect } = require('../middleware/Auth');
const { getProductReviews, createReview, updateReview, deleteReview } = require('../controllers/reviewC');

const router = express.Router();
const reviewInput = z.object({ productId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid product id'), rating: z.coerce.number().int().min(1).max(5), title: z.string().trim().max(120).optional(), comment: z.string().trim().min(3).max(1500) }).strict();
const reviewUpdate = z.object({ rating: z.coerce.number().int().min(1).max(5).optional(), title: z.string().trim().max(120).optional(), comment: z.string().trim().min(3).max(1500).optional() }).strict().refine((body) => Object.keys(body).length > 0, { message: 'Provide at least one field to update' });
router.get('/product/:productId', getProductReviews);
router.post('/', protect, validate(reviewInput), createReview);
router.patch('/:id', protect, validate(reviewUpdate), updateReview);
router.delete('/:id', protect, deleteReview);
module.exports = router;
