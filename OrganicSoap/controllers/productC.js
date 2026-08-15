const slugify = require('slugify')
const Product = require('../models/productM')
const Category = require('../models/categoryM')

// const Product =  require("../models/productM");
const mongoose  = require('mongoose');
async function getAllProducts (req,res){
    const products = await Product.find();
    res.json(products);   
}

async function getProductById(req,res){
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json( product )
}
async function createProduct(req, res) {
    const {
        name,
        desc,
        category,
        weight,
        unit,
        benefits,
        ingredients,
        tags,
        isActive,
        inStock,
        price,
        discounted_price
    } = req.body;

    try {
        const slug = `${slugify(name, { lower: true, strict: true })}-${Date.now().toString().slice(-4)}`;

        let categoryDoc = await Category.findOne({ name: category.toLowerCase() });

        if (!categoryDoc) {
            categoryDoc = await Category.create({ name: category.toLowerCase() });
        }

        const product = await Product.create({
            name,
            desc,
            slug,
            category: categoryDoc._id,
            weight: {
                value: weight.value,
                unit: weight.unit
            },
            benefits,
            ingredients,
            tags,
            isActive,
            inStock,
            price,
            discounted_price
        });

        res.status(200).json({ message: "Product created successfully", product });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const {
            name, slug, desc, category, weight, unit,
            benefits, ingredients, tags, isActive,
            inStock, price, discounted_price
        } = req.body;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product.name = name !== undefined ? name : product.name;
        product.slug = slug !== undefined ? slug : product.slug;
        product.desc = desc !== undefined ? desc : product.desc;
        product.category = category !== undefined ? category : product.category;
        product.weight = weight !== undefined ? weight : product.weight;
        product.unit = unit !== undefined ? unit : product.unit;
        product.benefits = benefits !== undefined ? benefits : product.benefits;
        product.ingredients = ingredients !== undefined ? ingredients : product.ingredients;
        product.tags = tags !== undefined ? tags : product.tags;
        product.isActive = isActive !== undefined ? isActive : product.isActive;
        product.inStock = inStock !== undefined ? inStock : product.inStock;
        product.price = price !== undefined ? price : product.price;
        product.discounted_price = discounted_price !== undefined ? discounted_price : product.discounted_price;

        await product.save();   // triggers your discount validator, unlike findByIdAndUpdate
        res.json(product);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteProduct(req, res) {
    const { id } = req.params;
    try {
        const result = await Product.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json("Deleted!");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function getAllCategory(req, res) {
    const { cat } = req.params;

    if (!mongoose.Types.ObjectId.isValid(cat)) {
        return res.status(400).json({ error: "Invalid category id" });
    }

    try {
        const products = await Product.find({ category: cat });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function getAllTag(req, res) {
    const { tag } = req.params;
    try {
        const taglist = tag.split("+").map(t => t.trim());
        const products = await Product.find({ tags: { $in: taglist } });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllCategory,
    getAllTag
}