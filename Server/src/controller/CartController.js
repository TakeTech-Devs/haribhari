const Cart = require('../model/cart');
const Product = require('../model/product')

exports.addCart = async (req, res, next) =>{
    try {
        let cart;
        const getCart = await Cart.findOne({user: req.user._id});
        if(!getCart){
            cart = new Cart({});;
        } else {
            console.log("B");
            cart = getCart; 
        }
        const productId = req.body.product_id;
        const getProduct = await Product.findById({_id: productId});
        if(!getProduct){
            return res.status(400).json({
                success: false,
                errors: {error: 'Product not found'},
            });
        }
        const qty = req.body.qty;
        const actualPrice = qty * getProduct.actual_price;
        const price = qty * getProduct.price;
        const metaData = {
            actualPrice: actualPrice,
            price: price,
        }
        cart.items.push({
            productId: productId,
            qty: qty,
            actual_price: metaData.actualPrice,
            price: metaData.price
        });
        cart.user = req.user._id;
        cart.totalQty = cart.totalQty + 1;
        console.log(cart.items);
        // await cart.save();
        return res.status(200).json({
            success: true,
            info: {message: 'Cart added successfully'},
        });
    } catch (error) {
        next(error)
    }
}