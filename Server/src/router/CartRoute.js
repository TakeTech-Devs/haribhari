const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const cartController=require('../controller/CartController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyToken} = require('../middleware/verifytoken');

router.post(
    '',
    verifyToken,
    validateResult,
    cartController.addCart,
);

router.get(
    '',
    verifyToken,
    cartController.viewCart,
);

router.put(
    '/:productId',
    verifyToken,
    cartController.deleteCart,
);

module.exports = router;
