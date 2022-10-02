const Product = require('../model/product');
const Category = require('../model/category');

exports.createProduct = async (req, res, next) => {
  try {
    const name = req.body.name;
    const actualPrice = req.body.actual_price;
    const price = req.body.price;
    const description = req.body.description;
    const disclaimer = req.body.disclaimer;
    const user = req.user._id;
    const category = req.body.category.toLowerCase();
    const getCategory = await Category.find({slug: category});
    const shelfLife = req.body.shelf_life;
    const exparyDate = req.body.expary_date;
    const customerCareEmail = req.body.customer_care_email;
    const customerCarePhone = req.body.customer_care_phone;
    if (getCategory.length === 0) {
      return res.status(404)
          .json({success: false, errors: {error: 'Category Not Exists'}});
    }
    const customerCare = {
      email: customerCareEmail,
      phone: customerCarePhone,
    };
    const product = new Product({
      name: name,
      actual_price: actualPrice,
      price: price,
      description: description,
      disclaimer: disclaimer,
      category: category,
      user: user,
      shelf_life: shelfLife,
      expary_date: exparyDate,
    });
    product.customer_care.push(customerCare);
    await product.save();
    res.status(201).json({
      success: true,
      info: {
        message: 'Product Create Successfully',
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.findAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      res.status(400).json({
        success: false,
        errors: {error: 'Product not found'},
      });
    } else {
      res.status(200).json({success: true, info: products});
    }
  } catch (error) {
    next(error);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findById({_id: id});
    if (!product) {
      return res.status(400).json({
        success: false,
        errors: {error: 'Product not found'},
      });
    } else {
      const similarProduct = await Product.find(
          {
            $and:
                        [
                          {category: product.category},
                          {name: {$nin: product.name}},
                        ],
          }, {_id: 0, name: 1, price: 1, description: 1},
      ).limit(4);
      res.status(200).json({
        success: true,
        info: product,
        similarProduct: similarProduct,
      });
    }
  } catch (error) {
    next(error);
  }
};
