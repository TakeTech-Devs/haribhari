const mongoose = require('mongoose');

const addressSchema= new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    receiver_name: {
        type: String,
        required: true,
    },
    resident_no: {
        type: String,
        required: true,
    },
    resident_name: {
        type: String,
        required: true,
    },
    address_type: {
        type: String,
        enum: ['home', 'work'],
        default: 'home',
    },
    pin: {
        type: String,
        // required: true,
    },
}, {
    timestamps: true,
});

// eslint-disable-next-line
const Address= new mongoose.model('Address', addressSchema);
module.exports=Address;
