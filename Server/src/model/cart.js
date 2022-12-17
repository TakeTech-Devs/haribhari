const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            qty: {
                type: Number,
                default: 1,
            },
            actual_price: {
                type: Number,
                default: 0,
            },
            price: {
                type: Number,
                default: 0,
            },
        },
    ],
    totalQty: {
        type: Number,
        default: 0,
    // required: true,
    },
    totalCost: {
        type: Number,
        default: 0,
    // required: true,
    },
    totalActualPrice: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    // required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Cart', cartSchema);
