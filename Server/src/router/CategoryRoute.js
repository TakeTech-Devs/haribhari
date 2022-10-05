const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const categoryController=require('../controller/CategoryController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyTokenAndAdmin} =
 require('../middleware/verifytoken');

router.post(
    '',
    verifyTokenAndAdmin,
    validateResult,
    categoryController.create,
);

// router.get(
//     '',
//     validateResult,
//     productController.findAllProduct,
// );

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

module.exports = router;
