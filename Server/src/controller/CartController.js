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
        cart.items.push({
            productId: productId,
            qty: qty,
            actual_price: metaData.actualPrice,
            price: metaData.price,
        });
        cart.user = req.user._id;
        cart.totalQty = cart.totalQty + 1;
        cart.items.forEach(element => {
            totlatCost = totlatCost+element.price;
            totalActualPrice = totalActualPrice + element.actual_price;
        })
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
