const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const bannerController=require('../controller/BannerController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyTokenAndAdmin} =
 require('../middleware/verifytoken');
const {imageValidate, imageUpdateValidate}=
 require('../middleware/SingleImageValidator');

const multer = require('multer');
let upload = multer({dest: './asset/image/banner/'});
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './asset/image/banner/');
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
    bannerController.create,
);

router.get(
    '',
    verifyTokenAndAdmin, 
    bannerController.find,
);

router.get(
    '/:id',
    verifyTokenAndAdmin, 
    bannerController.get,
);

router.put(
    '/enable/:id',
    verifyTokenAndAdmin,
    bannerController.enableBanner,
);

router.put(
    '/disable/:id',
    verifyTokenAndAdmin,
    bannerController.disableBanner,
);

router.delete(
    '/:id',
    verifyTokenAndAdmin,
    bannerController.delete,
);

module.exports = router;
