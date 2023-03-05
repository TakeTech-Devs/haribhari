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
    addressController.addAddress,
);

router.get(
    '',
    verifyToken,
    addressController.viewAddress,
);

router.get(
    '/:id',
    verifyToken,
    addressController.getAddress,
);

router.put(
    '/:id',
    verifyToken,
    validateResult,
    addressController.editAddress,
);

router.delete(
    '/:id',
    verifyToken,
    addressController.deleteAddress,
);

router.get(
    '/default/address',
    verifyToken,
    addressController.getDefaultAddress,
);

module.exports = router;
