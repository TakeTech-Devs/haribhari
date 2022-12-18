const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const orderController=require('../controller/OrderController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyToken} = require('../middleware/verifytoken');

router.post(
    '/:cartId',
    verifyToken,
    validateResult,
    orderController.addOrder,
);

module.exports = router;
