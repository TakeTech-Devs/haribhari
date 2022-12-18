const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const orderController=require('../controller/OrderController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyToken, verifyTokenAndAuthorization} = require('../middleware/verifytoken');

router.post(
    '/:cartId',
    verifyToken,
    orderController.addOrder,
);

router.get(
    '',
    verifyTokenAndAuthorization,
    orderController.viewAllOrder,
);

router.get(
    '/:orderId',
    verifyTokenAndAuthorization,
    orderController.viewSingleOrder,
);

module.exports = router;
