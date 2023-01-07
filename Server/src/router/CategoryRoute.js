const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const categoryController=require('../controller/CategoryController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyTokenAndAdmin} =
 require('../middleware/verifytoken');
const categoryValidation = require('../validator/CategoryValidation');
const {imageValidate, imageUpdateValidate} =
 require('../middleware/SingleImageValidator');

const multer = require('multer');
let upload = multer({dest: './asset/image/category/'});
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './asset/image/category/');
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
    verifyTokenAndAdmin, upload.single('image'),
    imageValidate,
    categoryValidation.createCategoryValidator,
    validateResult,
    categoryController.create,
);

router.get(
    '',
    // verifyTokenAndAdmin,
    validateResult,
    categoryController.findAllCategory,
);

router.get(
    '/:id',
    verifyTokenAndAdmin,
    categoryController.categoryOne,
);

router.put(
    '/:id',
    verifyTokenAndAdmin,
    upload.single('image'),
    imageUpdateValidate,
    categoryController.updateCategory,
);

router.delete(
    '/:id',
    verifyTokenAndAdmin,
    categoryController.deleteCategory,
);

module.exports = router;
