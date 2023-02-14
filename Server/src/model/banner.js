const mongoose = require('mongoose');

const bannerSchema= new mongoose.Schema({
    banner_image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    timestamps: true,
});

// eslint-disable-next-line
const Banner= new mongoose.model('Banner', bannerSchema);
module.exports=Banner;
