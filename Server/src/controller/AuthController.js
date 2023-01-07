const User = require('../model/user');
const Otp = require('../model/otp');
const bcrypt = require('bcrypt');
const mailTemplate = require('../utils/MailFormat');
const logger = require('../utils/logger');
const moment = require('moment');

exports.signUp = async (req, res, next) => {
    try {
        // eslint-disable-next-line
        const { name, email, password, confirm_password } = req.body;
        const emailuser = await User.findOne({ email: email });
        if (!emailuser) {
            // eslint-disable-next-line
            if (password == confirm_password) {
                const user = new User({
                    name: name,
                    email: email,
                    password: password,
                    // eslint-disable-next-line
                    confirm_password: confirm_password,
                });
                const otp = await user.generateOTP();
                console.log('otp', otp)
                await user.save();
                await new Otp({
                    user_id: user._id,
                    OTP: otp,
                    expairAt: moment().add(10, 'minutes').format('hh:mm:ss'),
                }).save();
                mailTemplate.mailOtp(user.name, user.email, otp);
                // res.setHeader("id", user._id);
                res.status(201).json({
                    success: true,
                    info: { message: `OTP Sent To ${user.email}` },
                    user_id: user._id,
                });
                logger.info(`OTP Sent To ${user.email}`);
            } else {
                res.status(400).json({
                    success: false,
                    errors: { error: 'Password Mismatched' },
                });
                logger.error('Password Mismatched');
            }
        } else {
            res.status(404).json({
                success: false,
                errors: {
                    error: 'User Already Exists',
                },
            });
            logger.error('User Already Exists');
        }
    } catch (error) {
        next(error);
    }
};

exports.verifyOtp = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const otp = req.body.otp;
        const otpInfo = await Otp.findOne({ user_id: _id }).sort({ createdAt: -1 });
        if (
            otpInfo &&
            otp == otpInfo.OTP &&
            moment().format('hh:mm:ss') <= otpInfo.expairAt
        ) {
            await User
                .findByIdAndUpdate({ _id: _id }, { email_verified: true }).sort(
                    { createdAt: -1 },
                );
            await Otp.updateOne(
                { user_id: _id, OTP: otpInfo.OTP },
                { expairAt: moment(new Date()).format('hh:mm:ss') },
            );
            res.status(200).json({
                success: true,
                info: {
                    message: 'Signup Successfully',
                },
            });
            logger.info('Signup Successfully');
        } else {
            res.status(404).json({
                success: false,
                errors: {
                    error: 'Your OTP is Invalid',
                },
            });
            logger.error('Your OTP is Invalid.');
        }
    } catch (error) {
        logger.error(error);
        next(error);
    }
};

exports.resendOtp = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const user = await User.findById({ _id: _id });
        if (user) {
            if (user.email_verified) {
                res.status(400).json({
                    success: false,
                    errors: {
                        error: 'Your account is already verified',
                    },
                });
            } else {
                const otp = await user.generateOTP();
                await new Otp({
                    user_id: user._id,
                    OTP: otp,
                    expairAt: moment().add(10, 'minutes').format('hh:mm:ss'),
                }).save();
                mailTemplate.mailOtp(user.name, user.email, otp);
                res.status(200).json({
                    success: true,
                    info: {
                        messaage: `OTP Sent To ${user.email}`,
                    },
                });
            }
        } else {
            res.status(404).json({
                success: false,
                errors: { error: 'User Not found' },
            });
        }
    } catch (error) {
        logger.error(error);
        next(error);
    }
};

exports.logIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const emailuser = await User.findOne({ email: email });
        if (emailuser) {
            if (emailuser.active) {
                if (emailuser.email_verified) {
                    const isValid = await bcrypt
                        .compare(password, emailuser.password);
                    const token = await emailuser.generateAuthToken();
                    if (isValid) {
                        res.status(200).json({
                            success: true,
                            info: { message: 'Login Successfully', token: token },
                        });
                        logger.info('Login Successfully');
                        next();
                    } else {
                        res.status(401).json({
                            success: false,
                            errors: { error: 'Invalid Credientials' },
                        });
                        logger.error('Invalid Credientials');
                    }
                } else {
                    res.status(400).json({
                        success: false,
                        errors: { error: 'Please Veriry Your Account' },
                    });
                    logger.error('Please Veriry Your Account');
                }
            } else {
                res.status(400).json({
                    success: false,
                    errors: { error: `You are Blocked. Please contact admin` },
                });
            }
        } else {
            res
                .status(400)
                .json({ success: false, errors: { error: 'User Not Exists' } });
            logger.error('User Not Exists');
        }
    } catch (error) {
        logger.error('Invalid Email/Password');
        next(error);
    }
};

exports.currentSignInAt = async (req, res, next) => {
    try {
        const email = req.body.email;
        await User.findOneAndUpdate(
            { email: email },
            { current_sign_in_at: Date.now() },
        );
    } catch (error) {
        next(error);
    }
};

exports.sendUserPasswordReset = async (req, res, next) => {
    try {
        const email = req.body.email;
        if (email) {
            const user = await User.findOne({ email: email });
            if (user) {
                const otp = await user.generateOTP();
                await new Otp({
                    user_id: user._id,
                    OTP: otp,
                }).save();
                mailTemplate.mailOtp(user.name, user.email, otp);
                res.setHeader('id', user._id);
                res.status(200).json({
                    success: true,
                    info: {
                        messaage: `OTP Sent To ${user.email}`,
                    },
                });
                logger.info(`OTP Sent To ${user.email}`);
            } else {
                res.status(400).send({ message: 'Email doesn\'t exists' });
                logger.error('Email doesn\'t exists');
            }
        } else {
            res.send({
                success: false,
                errors: { error: 'Email Field is Required' },
            });
        }
    } catch (error) {
        logger.error('Something Wrong');
        next(error);
    }
};

exports.userPasswordResetOtp = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const otp = req.body.otp;
        const otpInfo = await Otp.findOne({ user_id: _id }).sort({ createdAt: -1 });
        if (
            otpInfo &&
            otp === otpInfo.OTP &&
            moment().format('hh:mm:ss') <= otpInfo.expairAt
        ) {
            await User.findByIdAndUpdate({ _id: _id }, { email_verified: true });
            await Otp.updateOne(
                { user_id: _id, OTP: otpInfo.OTP },
                { expairAt: moment(new Date()).format('hh:mm:ss') },
            );
            res.status(200).json({
                success: true,
                info: {
                    message: 'OTP verified Successfully',
                },
            });
            logger.info('OTP verified Successfully');
        } else {
            res.status(404).json({
                success: false,
                errors: {
                    error: 'Your OTP is Invalid',
                },
            });
            logger.error('Your OTP is Invalid.');
        }
    } catch (error) {
        next(error);
    }
};

exports.userPasswordReset = async (req, res, next) => {
    // eslint-disable-next-line
    const { password, confirm_password } = req.body;
    const id = req.params.id;
    const user = await User.findById(id);
    try {
        // eslint-disable-next-line
        if (password && confirm_password) {
            // eslint-disable-next-line
            if (password !== confirm_password) {
                return res.json({
                    message: `New Password and 
                        Confirm New Password doesn\'t match`,
                });
            } else {
                const salt = Number(process.env.SALT);
                const newHashPassword = await bcrypt.hash(password, salt);
                await User.findByIdAndUpdate(user._id, {
                    $set: { password: newHashPassword },
                });
                res.json({ message: 'Password Reset Successfully' });
                logger.info('Password Reset Successfully');
            }
        } else {
            res.json({ message: 'All Fields are Required' });
        }
    } catch (error) {
        logger.error('Invalid Token');
        next(error);
    }
};

exports.changeUserPassword = async (req, res, next) => {
    try {

        const _id = req.user._id;
        const oldPassword = req.body.old_password;
        const password = req.body.password;
        const confirmPassword = req.body.confirm_password;
        const user = await User.findById({ _id: _id });
        const isValid = await bcrypt.compare(oldPassword, user.password);
        if (isValid) {
            if (password && confirmPassword) {
                if (password !== confirmPassword) {
                    res.send({
                        success: false,
                        errors: {
                            error: `New Password and 
                            Confirm New Password doesn\'t match`,
                        },
                    });
                } else {
                    console.log('first click', process.env.SALT, typeof process.env.SALT)

                    const salt = await bcrypt.genSalt(Number(process.env.SALT));
                    const newHashPassword = await bcrypt.hash(password, salt);
                    await User.findByIdAndUpdate(
                        { _id: _id },
                        {
                            $set: { password: newHashPassword },
                        },
                    );
                    res.send({
                        success: true,
                        info: { success: 'Password changed succesfully' },
                    });
                }
            } else {
                res.send({ success: false, message: 'All Fields are Required' });
            }
        } else {
            res.status(400).send({
                success: false,
                errors: { error: 'Current Password doesnot match' },
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        const name = req.body.name || user.name;
        const phone = req.body.phone || user.phone;
        const updateProfile = {
            name: name,
            phone: phone,
        };
        await User.findByIdAndUpdate({ _id: req.user._id }, updateProfile);
        res.status(200).json({
            success: true,
            info: { message: 'Profile Updated Successfully' },
        });
    } catch (error) {
        next(error);
    }
};

exports.viewProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        res.status(200).json({ success: true, info: user });
    } catch (error) {
        next(error);
    }
};

exports.adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const emailuser = await User.findOne({ email: email });
        if (emailuser) {
            if (emailuser.active) {
                if (emailuser.email_verified) {
                    if (emailuser.role !== 'admin') {
                        return res.status(400).json({
                            success: false,
                            errors: { error: 'You have not admin authorized' },
                        });
                    }
                    const isValid = await bcrypt
                        .compare(password, emailuser.password);
                    const token = await emailuser.generateAuthToken();
                    if (isValid) {
                        res.status(200).json({
                            success: true,
                            info: { message: 'Login Successfully', token: token },
                        });
                        logger.info('Login Successfully');
                        next();
                    } else {
                        res.status(401).json({
                            success: false,
                            errors: { error: 'Invalid Credientials' },
                        });
                        logger.error('Invalid Credientials');
                    }
                } else {
                    res.status(400).json({
                        success: false,
                        errors: { error: 'Please Veriry Your Account' },
                    });
                    logger.error('Please Veriry Your Account');
                }
            } else {
                res.status(400).json({
                    success: false,
                    errors: { error: `You are Blocked. Please contact admin` },
                });
            }
        } else {
            res
                .status(400)
                .json({ success: false, errors: { error: 'User Not Exists' } });
            logger.error('User Not Exists');
        }
    } catch (error) {
        next(error);
    }
};

exports.viewUser = async (req, res, next) => {
    try {
        const getUserInfo = await User.find({ role: 'user' });
        if (getUserInfo.length === 0) {
            res.status(404).json({
                success: false,
                errors: { error: 'Users not found' },
            });
        } else {
            res.status(200).json({ success: true, info: getUserInfo });
        }
    } catch (error) {
        next(error);
    }
};

exports.viewVender = async (req, res, next) => {
    try {
        const getVenderInfo = await User.find({ role: 'vender' });
        if (getVenderInfo.length === 0) {
            res.status(404).json({
                success: false,
                errors: { error: 'Users not found' },
            });
        } else {
            res.status(200).json({ success: true, info: getVenderInfo });
        }
    } catch (error) {
        next(error);
    }
};

exports.viewAdmin = async (req, res, next) => {
    try {
        const getAdminInfo = await User.find({ role: 'admin' });
        if (getAdminInfo.length === 0) {
            res.status(404).json({
                success: false,
                errors: { error: 'Users not found' },
            });
        } else {
            res.status(200).json({ success: true, info: getAdminInfo });
        }
    } catch (error) {
        next(error);
    }
};

exports.blockUser = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const getUser = await User.findOne({ _id: _id });
        if (!getUser) {
            res.status(404).json({
                success: false,
                errors: { error: 'Users not found' },
            });
        } else {
            await User.update({ _id: _id }, { $set: { active: false } });
            res.status(200).json({
                success: true, info:
                    { message: 'User Blocked' }
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.unBlockUser = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const getUser = await User.findOne({ _id: _id });
        if (!getUser) {
            res.status(404).json({
                success: false,
                errors: { error: 'Users not found' },
            });
        } else {
            await User.update({ _id: _id },
                { $set: { active: true } });
            res.status(200).json({
                success: true,
                info: { message: 'User Unblocked' }
            });
        }
    } catch (error) {
        next(error);
    }
};

exports.addVenderAdmin = async (req, res, next) => {
    try {
        try {
            // eslint-disable-next-line
            const { name, email, password, confirm_password } = req.body;
            const role = req.body.role;
            const unHashedPassword = password;
            const emailuser = await User.findOne({ email: email });
            if (!emailuser) {
                // eslint-disable-next-line
                if (password == confirm_password) {
                    const user = new User({
                        name: name,
                        email: email,
                        password: password,
                        role: role,
                        email_verified: true,
                        phone_verified: true,
                    });
                    await user.save();
                    mailTemplate
                        .createVendorAdmin(role, name, email, unHashedPassword);
                    res.status(201).json({
                        success: true,
                        info: { message: `Vender Created.` },
                        user_id: user._id,
                    });
                    logger.info(`Vender Created.`);
                } else {
                    res.status(400).json({
                        success: false,
                        errors: { error: 'Password Mismatched' },
                    });
                    logger.error('Password Mismatched');
                }
            } else {
                res.status(404).json({
                    success: false,
                    errors: {
                        error: 'User Already Exists',
                    },
                });
                logger.error('User Already Exists');
            }
        } catch (error) {
            next(error);
        }
    } catch (error) {
        next(error);
    }
};
