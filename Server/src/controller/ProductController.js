const fs = require('fs');
const Product = require('../model/product');
const Category = require('../model/category');
const APIFeatures = require('../utils/apiFeatures');
const moment = require('moment');

exports.createProduct = async (req, res, next) => {
    try {
        const imagePath = [];
        const name = req.body.name;
        const actualPrice = req.body.actual_price;
        const price = req.body.price;
        const description = req.body.description;
        const disclaimer = req.body.disclaimer;
        const user = req.user._id;
        const category = req.body.category.toLowerCase();
        const getCategory = await Category.find({ slug: category });
        const exparyDate = req.body.expary_date;
        const customerCareEmail = req.body.customer_care_email;
        const customerCarePhone = req.body.customer_care_phone;
        if (getCategory.length === 0) {
            req.files.forEach((element) => {
                fs.unlinkSync(element.path);
            });
            return res.status(404)
                .json({ success: false, errors: { error: 'Category Not Exists' } });
        }
        const customerCare = {
            email: customerCareEmail,
            phone: customerCarePhone,
        };
        req.files.forEach((element) => {
            imagePath.push(element.path);
        });
        const product = new Product({
            name: name,
            actual_price: actualPrice,
            price: price,
            description: description,
            disclaimer: disclaimer,
            category: getCategory[0]._id,
            user: user,
            expary_date: exparyDate,
            customer_care: customerCare,
            images: imagePath,
        });
        await product.save();
        res.status(201).json({
            success: true,
            info: {
                message: 'Product Create Successfully',
            },
        });
    } catch (error) {
        req.files.forEach((element) => {
            fs.unlinkSync(element.path);
        });
        next(error);
    }
};

exports.findAllProduct = async (req, res, next) => {
    try {
        const resPerPage = req.query.limit;
        const product = Product.find();
        const apiFeatures = new APIFeatures(product, req.query)
            .search()
            .pagination(resPerPage);
        const products = await apiFeatures.query;
        if (products.length === 0) {
            res.status(400).json({
                success: false,
                errors: { error: 'Product not found' },
            });
        } else {
            res.status(200).json({ success: true, info: products });
        }
    } catch (error) {
        next(error);
    }
};

exports.getProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findById({ _id: id });
        if (!product) {
            return res.status(400).json({
                success: false,
                errors: { error: 'Product not found' },
            });
        } else {
            // eslint-disable-next-line
            const discount = ((product.actual_price - product.price) / product.actual_price) * 100;
            const shelfLife = moment(product.expary_date, 'YYYYMMDD').fromNow();
            const similarProduct = await Product.find(
                {
                    $and:
                        [
                            { category: product.category },
                            { name: { $nin: product.name } },
                        ],
                }, { name: 1, price: 1, description: 1, images: 1 },
            ).limit(4);
            const metaData = {
                discount: Math.round(discount),
                shelfLife: shelfLife,
            };
            res.status(200).json({
                success: true,
                info: product,
                metaData: metaData,
                similarProduct: similarProduct,
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.findAllProductByCategory = async (req, res, next) => {
    try {
        const categoryId = req.params.categoryId;
        const procuctByCategory = await Product.find({ id: categoryId });
        if (procuctByCategory.length === 0) {
            res.status(400).json({
                success: false,
                errors: { error: 'Product not found' },
            });
        } else {
            res.status(200).json({ success: true, info: procuctByCategory });
        }
    } catch (error) {
        next(error);
    }
};


exports.deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const getProduct = await Product.findOne({ _id: productId });
        if (getProduct) {
            const deleteProduct = await Product.deleteOne({ _id: productId })
            if(deleteProduct.acknowledged){
                if(getProduct.images){
                    getProduct.images.forEach(function(image){
                        fs.unlinkSync(image);
                    })
                }
                res.status(200).json({
                    success: true,
                    info: {
                        message: 'Product removed Successfully',
                    },
                });
            } else {
                res.status(200).json({ success: true, errors: {error: 'Please try again after some time'} });
            }
        } else {
            res.status(404).json({ success: false, errors: { error: 'Product not found' } });
        }
    } catch (error) {
        next(error)
    }
}