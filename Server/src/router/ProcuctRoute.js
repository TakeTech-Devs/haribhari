const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const productController=require('../controller/ProductController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyToken, verifyTokenAndAdmin} = require('../middleware/verifytoken');

router.post(
    '',
    verifyTokenAndAdmin,
    validateResult,
    productController.createProduct,
);

router.get(
    '',
    validateResult,
    productController.findAllProduct,
);

router.get(
    '/:id',
    verifyToken,
    validateResult,
    productController.getProduct,
);

router.get(
    '/find/:category',
    verifyToken,
    validateResult,
    productController.findAllProductByCategory,
);

module.exports = router;
