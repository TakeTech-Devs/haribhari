const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const productController=require('../controller/ProductController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyToken, verifyTokenAndVender} =
 require('../middleware/verifytoken');
const {imageValidateMultiple}=
 require('../middleware/MultipleImageValidator');
const ProductValidator = require('../validator/ProductValidation');

const multer = require('multer');
let upload = multer({dest: './asset/image/product/'});
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './asset/image/product/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+'-'+file.originalname);
    },
});

upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 2, // 2 mb file
    },
});

router.post(
    '',
    verifyTokenAndVender, upload.array('image', 4),
    ProductValidator.createCategoryValidator,
    validateResult,
    imageValidateMultiple,
    productController.createProduct,
);

router.get(
    '',
    validateResult,
    productController.findAllProduct,
);

router.get(
    '/:id',
    validateResult,
    productController.getProduct,
);

router.get(
    '/find/:category',
    // verifyToken,
    validateResult,
    productController.findAllProductByCategory,
);

router.delete(
    '/:productId',
    verifyTokenAndVender,
    productController.deleteProduct,
);

module.exports = router;
