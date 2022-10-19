const {body} = require('express-validator');

exports.createCategoryValidator=[
    body('name').notEmpty().withMessage('Product name should not be empty!')
        .isString().withMessage('Product name should be alphabetic')
        .isLength({min: 2, max: 30})
        .withMessage('Category name maximum 30 character'),
    body('actual_price').notEmpty()
        .withMessage('Actual price should not be empty!')
        .isNumeric().withMessage('Actual price should be alphabetic'),
    body('price').notEmpty().withMessage('Price should not be empty!')
        .isNumeric().withMessage('Price should be alphabetic'),
    body('description')
        .notEmpty().withMessage('Description should not be empty!')
        .isString().withMessage('Description should be alphabetic')
        .isLength({min: 2, max: 100})
        .withMessage('Description maximum 100 character'),
    body('disclaimer').notEmpty().withMessage('Disclaimer should not be empty!')
        .isString().withMessage('Disclaimer should be alphabetic')
        .isLength({min: 2, max: 100})
        .withMessage('Disclaimer maximum 100 character'),
    body('expary_date')
        .notEmpty().withMessage('Expary date should not be empty')
        .isDate().withMessage('Expary date must be a date')
        .toDate().custom((date, {req}) => {
            const currentDate = new Date();
            if (currentDate.getTime() >= req.body.expary_date.getTime()) {
                throw new Error('Expary date must be before current date');
            }
            return true;
        }),
    body('customer_care_email').isEmail()
        .withMessage('Please Enter a valid Email')
        .normalizeEmail({gmail_remove_dots: false})
        .notEmpty().withMessage('Customer care email should not be empty!'),
];
