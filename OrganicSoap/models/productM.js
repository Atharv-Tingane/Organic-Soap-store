const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    
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
    hashtags: [{ type: String }],

    is_active: { type: Boolean, default: false },
    inStock: { type: Number, default: 0 },

    price: { type: Number, required: true },
    discounted_price: {
        type: Number,
        validate: {
            validator: function (value) {
                return value == null || value < this.price;
            },
            message: 'Discount price must be less than original price'
        }
    },
    images:[{
        type:String,
        required:true
    }]

}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);