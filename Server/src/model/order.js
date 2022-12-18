const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId:{
        type: String,
        required: false
    },
    shippingInfo: {
        address: {
            type: mongoose.Schema.ObjectId,
            ref: 'Address',
            // required: true,
        },
        pinCode: {
            type: Number,
            // required: true,
        },
        phone: {
            type: Number,
            // required: true,
        },
    },
    orderItems: [
        {
            actual_price: {
                type: Number,
                // required: true,
            },
            price: {
                type: Number,
                // required: true,
            },
            quantity: {
                type: Number,
                // required: true,
            },
            product: {
                type: mongoose.Schema.ObjectId,
                ref: 'Product',
                // required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    // required: true,
    },
    paymentType:{
        type: String
    },
    paymentInfo: {
        id: {
            type: String,
            // required: true,
        },
        status: {
            type: String,
            // required: true,
        },
    },
    paidAt: {
        type: Date,
    // required: true,
    },
    itemsPrice: {
        type: Number,
        // required: true,
    },
    taxPrice: {
        type: Number,
        // required: true,
        default: 0,
    },
    shippingPrice: {
        type: Number,
        // required: true,
    },
    totalPrice: {
        type: Number,
        // required: true,
    },
    orderStatus: {
        type: String,
        // required: true,
        default: 'Processing',
    },
    deliveredAt: Date,
    isCancelled: {
        type: Boolean,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
