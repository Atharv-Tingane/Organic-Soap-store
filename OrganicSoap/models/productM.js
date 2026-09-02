const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, maxlength: 160 },
    slug: { type: String, required: true, unique: true, index: true },
    desc: { type: String, required: true, trim: true, maxlength: 5000 },
    
    category: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Category',
        required: true,      
    },
    weight: {
        value: { type: Number, required: true },   
        unit: { type: String, enum: ['g', 'ml'], required: true }  
    },

    benefits: [{ type: String }],
    ingredients: [{ type: String }],
    tags: [{ type: String }],

    isActive: { type: Boolean, default: false, index: true },
    inStock: { type: Number, default: 0, min: 0 },

    price: { type: Number, required: true, min: 0 },
    ratingAverage: { type: Number, default: 0, min: 0, max: 5 },
    ratingCount: { type: Number, default: 0, min: 0 },
    discounted_price: {
        type: Number,
        validate: {
            validator: function (value) {
                return value == null || value < this.price;
            },
            message: 'Discount price must be less than original price'
        }
    },
    images: [{ type: String, required: true, trim: true }]

}, { timestamps: true });

productSchema.index({ name: 'text', desc: 'text', tags: 'text' });

module.exports = mongoose.model('Product', productSchema);
