const Category = require("../models/categoryM");
const mongoose = require("mongoose");

// ① Get all categories
async function getAllCategories(req, res) {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// ② Create a new category
async function createCategory(req, res) {
    const { name } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).json({ error: "Category name is required" });
    }

    try {
        const existing = await Category.findOne({ name: name.trim() });
        if (existing) {
            return res.status(409).json({ error: "Category already exists" });
        }

        const category = await Category.create({ name: name.trim() });
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// ③ Update a category
async function updateCategory(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid category id" });
    }

    if (!name || !name.trim()) {
        return res.status(400).json({ error: "Category name is required" });
    }

    try {
        const updated = await Category.findByIdAndUpdate(
            id,
            { name: name.trim() },
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// ④ Delete a category
async function deleteCategory(req, res) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid category id" });
    }

    try {
        const deleted = await Category.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.status(200).json({ message: "Deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
};