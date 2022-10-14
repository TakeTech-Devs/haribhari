const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const addressController=require('../controller/AddressController');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyToken} = require('../middleware/verifytoken');

router.post(
    '',
    verifyToken,
    validateResult,
    addressController.addAddress
);

router.get(
    '',
    verifyToken,
    validateResult,
    addressController.viewAddress
);

module.exports = router;