const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const orderController=require('../controller/OrderController');
// const {validateResult} = require('../middleware/ValidateResult');
const {verifyToken, verifyTokenAndAuthorization} =
require('../middleware/verifytoken');

router.post(
    '/:cartId',
    verifyToken,
    orderController.addOrder,
);

router.get(
    '',
    verifyToken,
    orderController.viewAllOrder,
);

router.get(
    '/:orderId',
    verifyToken,
    orderController.viewSingleOrder,
);

module.exports = router;
