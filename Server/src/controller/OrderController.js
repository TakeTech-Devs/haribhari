const Order = require('../model/order');
const Address = require('../model/address');
const Cart = require('../model/cart');
// const APIFeatures = require('../utils/apiFeatures');
// const moment = require('moment');
const {randomUUID} = require('crypto');


exports.addOrder = async (req, res, next) => {
    try {
        const items = [];
        const userId = req.user._id;
        const caartId = req.params.cartId;
        const pin = req.body.pin;
        const phone = req.body.phone;
        const taxPrice = 0;
        const address = await Address.findOne({user: userId});
        if (!address) {
            return res.status(404).json({
                success: false,
                errors: {error: 'No address found'},
            });
        }
        const cart = await Cart.findOne({_id: caartId, user: userId});
        if (!cart) {
            return res.status(404).json({
                success: false,
                errors: {error: 'No cart found'},
            });
        }
        const shippingInfo = {
            address: address._id,
            pinCode: pin,
            phone: phone,
        };
        cart.items.forEach((element) => {
            const data = {
                actual_price: element.actual_price,
                price: element.price,
                quantity: element.qty,
                product: element.productId,
            };
            items.push(data);
        });
        const itemsPrice = cart.totalActualPrice;
        const shippingPrice = cart.totalCost;
        const totalPrice = taxPrice + shippingPrice;
        const order = new Order({
            orderId: randomUUID(),
            shippingInfo: shippingInfo,
            orderItems: items,
            user: userId,
            itemsPrice: itemsPrice,
            taxPrice: taxPrice,
            shippingPrice: shippingPrice,
            totalPrice: totalPrice,
        });
        const createOder = await order.save();
        if (createOder) {
            return res.status(200).json({
                success: true,
                info: {message: 'Order added successfully'},
            });
        } else {
            return res.status(500).json({
                success: false,
                info: {message: 'Please try again after some time'},
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.viewAllOrder = async (req, res, next) => {
    try {
        const viewAllOrder = await Order.find({
            user: req.user._id,
        }).populate('shippingInfo.address').populate('orderItems.product');
        if (viewAllOrder.length == 0) {
            return res.status(404).json({
                success: false,
                errors: {error: 'No order found'},
            });
        } else {
            return res.status(200).json({
                success: true,
                info: viewAllOrder,
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.viewSingleOrder = async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const viewOrder = await Order.findOne({
            _id: orderId,
            user: req.user._id,
        }).populate('shippingInfo.address').populate('orderItems.product');
        if (!viewOrder) {
            return res.status(404).json({
                success: false,
                errors: {error: 'No order found'},
            });
        } else {
            return res.status(200).json({
                success: true,
                info: viewOrder,
            });
        }
    } catch (error) {
        next(error);
    }
};
