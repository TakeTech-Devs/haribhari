const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const categoryController=require('../controller/CategoryController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyTokenAndAdmin} =
 require('../middleware/verifytoken');
const categoryValidation = require('../validator/CategoryValidation');


router.post(
    '',
    verifyTokenAndAdmin, categoryValidation.createCategoryValidator,
    validateResult,
    categoryController.create,
);

router.get(
    '',
    verifyTokenAndAdmin,
    validateResult,
    categoryController.findAllCategory,
);

// router.get(
//     '/:id',
//     verifyToken,
//     validateResult,
//     productController.getProduct,
// );

// router.get(
//     '/find/:category',
//     verifyToken,
//     validateResult,
//     productController.findAllProductByCategory,
// );

router.delete(
    '/:id',
    verifyTokenAndAdmin,
    categoryController.deleteCategory,
);

module.exports = router;
