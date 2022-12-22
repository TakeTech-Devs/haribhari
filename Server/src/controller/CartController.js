const cart = require('../model/cart');
const Cart = require('../model/cart');
const Product = require('../model/product');

exports.addCart = async (req, res, next) =>{
    try {
        let cart;
        let totlatCost = 0;
        let totalActualPrice= 0;
        const getCart = await Cart.findOne({user: req.user._id});
        if (!getCart) {
            cart = new Cart({}); ;
        } else {
            cart = getCart;
        }
        const productId = req.body.product_id;
        const qty = req.body.qty;
        const getProduct = await Product.findById({_id: productId});
        if (!getProduct) {
            return res.status(400).json({
                success: false,
                errors: {error: 'Product not found'},
            });
        }
        const actualPrice = qty * getProduct.actual_price;
        const price = qty * getProduct.price;
        const metaData = {
            actualPrice: actualPrice,
            price: price,
        };
        // ///have an issue
        cart.items.push({
            productId: productId,
            qty: qty,
            actual_price: metaData.actualPrice,
            price: metaData.price,
        });
        cart.user = req.user._id;
        cart.totalQty = cart.totalQty + 1;
        cart.items.forEach((element) => {
            totlatCost = totlatCost+element.price;
            totalActualPrice = totalActualPrice + element.actual_price;
        });
        cart.totalCost = totlatCost;
        cart.totalActualPrice = totalActualPrice;
        await cart.save();
        return res.status(200).json({
            success: true,
            info: {message: 'Cart added successfully'},
        });
    } catch (error) {
        next(error);
    }
};


exports.viewCart = async (req, res, next) => {
    try {
        const getCart = await Cart.findOne({user: req.user._id})
            .populate('user')
            .populate('items.productId');
        if (getCart) {
            return res.status(200).json({
                success: true,
                info: getCart,
            });
        } else {
            return res.status(404).json({
                success: true,
                errors: {error: 'Cart not found'},
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.deleteCart = async (req, res, next) => {
    try {
        let totlatCost = 0;
        let totalActualPrice= 0;
        const productId = req.params.productId;
        const getCart = await Cart.findOne({user: req.user._id});
        if (getCart) {
            for ( let i = 0; i < getCart.items.length; i++) {
                if (getCart.items[i].productId == productId) {
                    getCart.items.splice(i, 1);
                    i--;
                }
            }
            getCart.items.forEach((element) => {
                totlatCost = totlatCost+element.price;
                totalActualPrice = totalActualPrice + element.actual_price;
            });
            const totalQty = getCart.items.length;
            if (totalQty>0) {
                await Cart.updateOne({user: req.user._id}, {
                    totalQty: totalQty,
                    totalCost: totlatCost,
                    totalActualPrice: totalActualPrice,
                    items: getCart.items,
                });
                return res.status(200).json({
                    success: true,
                    info: {message: 'Product removed successfully from cart'},
                });
            } else {
                await cart.deleteOne({user: req.user._id});
                return res.status(200).json({
                    success: true,
                    info: {message: 'Cart successfully removed'},
                });
            }
        } else {
            return res.status(404).json({
                success: true,
                errors: {error: 'Cart not found'},
            });
        }
    } catch (error) {
        next(error);
    }
};
