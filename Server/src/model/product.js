const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    actual_price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    price: {
        type: Number,
        required: true,
        default: 0.0,
    },
    description: {
        type: String,
        required: true,
    },
    disclaimer: {
        type: String,
        required: true,
    },
    customer_care: {
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
    },
    expary_date: {
        type: Date,
        required: true,
    },
    images: [
        {
            type: String,
            required: true,
        },
    ],
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Product', productSchema);
