const slugify = require('slugify');
const mongoose = require('mongoose');
const Product = require('../models/productM');
const cloudinary = require('../config/cloudinary');
const Category = require('../models/categoryM');
async function categoryId(value) { if (mongoose.Types.ObjectId.isValid(value)) { const category = await Category.findById(value); if (category) return category._id; } const category = await Category.findOne({ name: String(value).trim().toLowerCase() }); if (!category) { const error = new Error('Category not found'); error.statusCode = 400; throw error; } return category._id; }
function queryOptions(req) { const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1); const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 20, 1), 100); return { page, limit, skip: (page - 1) * limit }; }
async function getAllProducts(req, res, next) { try { const { page, limit, skip } = queryOptions(req); const filter = {}; if (req.query.active !== 'false') filter.isActive = true; if (req.query.category) filter.category = await categoryId(req.query.category); if (req.query.tags) filter.tags = { $in: req.query.tags.split(',').map((tag) => tag.trim().toLowerCase()).filter(Boolean) }; if (req.query.search) filter.$text = { $search: req.query.search }; const [products, total] = await Promise.all([Product.find(filter).populate('category', 'name').sort({ createdAt: -1 }).skip(skip).limit(limit), Product.countDocuments(filter)]); res.status(200).json({ products, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }); } catch (error) { next(error); } }
async function getProductById(req, res, next) { if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid product id' }); try { const product = await Product.findById(req.params.id).populate('category', 'name'); if (!product) return res.status(404).json({ message: 'Product not found' }); res.status(200).json(product); } catch (error) { next(error); } }
async function createProduct(req, res, next) {
  try {
    if (!req.file) {
      const error = new Error('Product image is required');
      error.statusCode = 400;
      throw error;
    }

    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
      {
        folder: 'organic-soap/products'
      }
    );

    const productData = {
      ...req.body,

      category: await categoryId(req.body.category),

      slug: `${slugify(req.body.name, {
        lower: true,
        strict: true
      })}-${Date.now().toString(36)}`,

      images: [result.secure_url]
    };

    const product = await Product.create(productData);

    res.status(201).json({
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    next(error);
  }
}
async function updateProduct(req, res, next) {

if (req.body.isActive !== undefined) {
  req.body.isActive = req.body.isActive === "true";
}
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid product id' });
  }

  try {
    const changes = { ...req.body };

    // Upload new image only if one was provided
    if (req.file) {
      const result = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        {
          folder: 'organic-soap/products'
        }
      );

      changes.images = [result.secure_url];
    }

    if (changes.category) {
      changes.category = await categoryId(changes.category);
    }

    if (changes.name && !changes.slug) {
      changes.slug = `${slugify(changes.name, {
        lower: true,
        strict: true
      })}-${Date.now().toString(36)}`;
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }

    product.set(changes);
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}
async function deleteProduct(req, res, next) { if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(400).json({ message: 'Invalid product id' }); try { const product = await Product.findByIdAndDelete(req.params.id); if (!product) return res.status(404).json({ message: 'Product not found' }); res.status(204).send(); } catch (error) { next(error); } }
async function getAllCategory(req, res, next) { req.query.category = req.params.cat; return getAllProducts(req, res, next); }
async function getAllTag(req, res, next) { req.query.tags = req.params.tag.replaceAll('+', ','); return getAllProducts(req, res, next); }
module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, getAllCategory, getAllTag };
