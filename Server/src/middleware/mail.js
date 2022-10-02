const nodemailer = require('nodemailer');
const {emailId, password} = require('../../config/bootstrap');

const mailTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: emailId,
    pass: password,
  },
});

const sendMail = (mailOptions)=>{
  mailTransporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      // eslint-disable-next-line
      console.log('Error Occurs');
    } else {
      // eslint-disable-next-line
      console.log('Email sent successfully');
    }
  });
};

module.exports = sendMail;
