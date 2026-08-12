const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    isPrevious: {
        type: Boolean,
        default: false
    },

    addresses: [{
        name: String,
        phone: String,
        addressLine: String,
        city: String,
        state: String,
        pincode: String,
        isDefault: {
            type: Boolean,
            default: false
        }
    }],

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    phone: {
        type: String,
        required: true
    },

    DOB: {
        type: Date,
    
    },

    totalOrders: {
        type: Number,
        default: 0
    },

    reviews: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        review: {
            type: String,
            trim: true
        }
    }],

    opinion: {
        type: String,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);