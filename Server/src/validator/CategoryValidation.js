const {body} = require('express-validator');

exports.createCategoryValidator=[
    body('name').notEmpty().withMessage('Category name should not be empty!')
        .isString().withMessage('Category name should be alphabetic')
        .isLength({min: 2, max: 30})
        .withMessage('Category name maximum 30 character'),
];
