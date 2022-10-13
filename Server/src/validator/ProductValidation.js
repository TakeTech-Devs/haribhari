const {body} = require('express-validator');

exports.createCategoryValidator=[
    body('name').notEmpty().withMessage('Category name should not be empty!')
        .isAlpha().withMessage('Category name should be alphabetic')
        .isLength({min: 2, max: 30})
        .withMessage('Category name maximum 30 character'),
    body('actual_price').notEmpty()
        .withMessage('Actual price should not be empty!')
        .isNumeric().withMessage('Actual price should be alphabetic'),
    body('price').notEmpty().withMessage('Price should not be empty!')
        .isNumeric().withMessage('Price should be alphabetic'),
    body('description')
        .notEmpty().withMessage('Description should not be empty!')
        .isAlpha().withMessage('Description should be alphabetic')
        .isLength({min: 2, max: 100})
        .withMessage('Description maximum 100 character'),
    body('disclaimer').notEmpty().withMessage('Disclaimer should not be empty!')
        .isAlpha().withMessage('Disclaimer should be alphabetic')
        .isLength({min: 2, max: 100})
        .withMessage('Disclaimer maximum 100 character'),
    body('category')
        .notEmpty().withMessage('Category name should not be empty!')
        .isAlpha().withMessage('Category name should be alphabetic')
        .isLength({min: 2, max: 30})
        .withMessage('Category name maximum 30 character'),
];
