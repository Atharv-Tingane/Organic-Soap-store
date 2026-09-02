const express = require('express');
const { z } = require('zod');
const validate = require('../middleware/validate');
const { protect, authorize } = require('../middleware/Auth');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, getAllCategory, getAllTag } = require('../controllers/productC');
const router = express.Router();
const productFields = {

    name: z.string().trim().min(2).max(160),

    slug: z.string().trim().min(2).max(160),

    desc: z.string().trim().min(2).max(5000),

    category: z.string().trim().min(1).max(80),

    weight: z.object({
        value: z.coerce.number().positive(),
        unit: z.enum(['g', 'ml'])
    }),

    benefits: z.array(
        z.string().trim().min(1).max(300)
    ).max(30).default([]),

    ingredients: z.array(
        z.string().trim().min(1).max(300)
    ).max(50).default([]),

    tags: z.array(
        z.string().trim().min(1).max(50)
            .transform((tag) => tag.toLowerCase())
    ).max(20).default([]),

    isActive: z.boolean().default(false),

    inStock: z.coerce.number().int().min(0).default(0),

    price: z.coerce.number().nonnegative(),

    discounted_price: z.coerce.number()
        .nonnegative()
        .nullable()
        .optional(),

    images: z.array(
        z.string().url().max(2048)
    ).min(1).max(10),
};
const productInput = z.object(productFields).strict().refine((data) => data.discounted_price == null || data.discounted_price < data.price, { message: 'Discount price must be less than original price', path: ['discounted_price'] });
const productUpdateInput = z.object(productFields).partial().strict();

router.get('/all', getAllProducts);
router.get('/category/:cat', getAllCategory);
router.get('/tag/:tag', getAllTag);
router.get('/:id', getProductById);
router.post('/create', protect, authorize('admin'), validate(productInput), createProduct);
router.put('/:id', protect, authorize('admin'), validate(productUpdateInput), updateProduct);
router.delete('/:id', protect, authorize('admin'), deleteProduct);
module.exports = router;
