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

    isActive: {
        type: Boolean,
        default: true,
        index: true
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

    opinion: {
        type: String,
        trim: true
    }
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

// Reviews live in their own collection. Populate this virtual when a user's reviews are needed.
UserSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'user'
});

module.exports = mongoose.model("User", UserSchema);
