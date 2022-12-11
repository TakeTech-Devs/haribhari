const sendMail = require('../middleware/mail');
const {emailId} = require('../../config/bootstrap');

const mailOtp = (name, email, otp) =>{
    sendMail({
        from: emailId,
        to: email,
        subject: 'Verify OTP for haribhari',
        html: `<h5>Hi ${name}</h5><p>Your OTP is: <b>${otp}</b>, 
        Valid for 10 minutes. Please do not share OTP with anyone.</p>`,
    });
};

const promotedAdminNotification = (name, email) =>{
    sendMail({
        from: emailId,
        to: email,
        subject: 'Congratulations, Admin',
        html: `<h5>Hi ${name}</h5><p>congratulations, 
      You have an Adminstrative Power.</p>`,
    });
};

const createVendorAdmin = (role, name, email, password) => {
    sendMail({
        from: emailId,
        to: email,
        subject: `You are, ${role}`,
        html: `<h5>Hi ${name},</h5><p>Your login credentials,
      email: ${email} and password: ${password}. Please Change Password.</p>`,
    });
};

module.exports = {mailOtp, promotedAdminNotification, createVendorAdmin};
