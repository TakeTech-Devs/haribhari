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



module.exports = router;
