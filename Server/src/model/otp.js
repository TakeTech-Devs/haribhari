const mongoose = require('mongoose');
const moment = require('moment');
// const downloadDate = moment().format("DD-MM-YYYY hh:mm:ss");
// console.log(typeof downloadDate);
// console.log(moment().format("hh:mm:ss"));
// console.log(moment().add(10, "minutes").format("hh:mm:ss"));
// console.log(moment().isBefore(moment().add(10, "minutes")));

const otpSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    OTP: {
        type: Number,
        required: true,
    },
    expairAt: {
        type: String,
        default: moment().add(10, 'minutes').format('hh:mm:ss'),
    },
}, {
    timestamps: true,
});

// eslint-disable-next-line
const Otp = new mongoose.model('Otp', otpSchema);
module.exports = Otp;
