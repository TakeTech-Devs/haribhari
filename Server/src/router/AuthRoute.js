const express = require('express');
const router = new express.Router();
router.use(express.json({}));
const authController=require('../controller/AuthController');
const authValidator=require('../validator/AuthValidation');
const {validateResult} = require('../middleware/ValidateResult');
const {verifyToken, verifyTokenAndAdmin} = require('../middleware/verifytoken');

router.post(
    '/signup',
    authValidator.signInValidator,
    validateResult,
    authController.signUp,
);

router.put('/verifyotp/:id', authValidator.otpValidator,
    validateResult, authController.verifyOtp);

router.get('/resendotp/:id', authController.resendOtp);

router.post('/login', authValidator.logInValidator, validateResult,
    authController.logIn, authController.currentSignInAt);

router.post('/admin/login', authValidator.logInValidator, validateResult,
    authController.adminLogin, authController.currentSignInAt);

router.post('/forgotpassword', authValidator.forgotPasswordValidator,
    validateResult, authController.sendUserPasswordReset);

router.post('/resetpasswordotp/:id', authController.userPasswordResetOtp);

router.post('/resetpassword/:id', authValidator.resetPasswordValidator,
    validateResult, authController.userPasswordReset);

router.put('/changepassword', verifyToken,
    authValidator.changePasswordValidator,
    validateResult, authController.changeUserPassword);

router.get('/viewprofile', verifyToken, authController.viewProfile);

router.put('/updateprofile', verifyToken,
    authValidator.updateProfileValidator,
    validateResult, authController.updateProfile);

router.get('/users', verifyTokenAndAdmin, authController.viewUser);
router.put('/user/block/:id', verifyTokenAndAdmin, authController.blockUser);
router.put('/user/unblock/:id', verifyTokenAndAdmin, authController.unBlockUser);



module.exports = router;
