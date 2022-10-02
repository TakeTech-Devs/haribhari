const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {salt, secretKey} = require('../../config/bootstrap');

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        default: 'user',
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    email_verified: {
        type: Boolean,
        default: false,
    },
    phone_verified: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true,
    },
    address: [
        {
            type: String,
        },
    ],
    current_sign_in_at: {
        type: Date,
    },
}, {
    timestamps: true,
});

UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

UserSchema.methods.generateOTP = async function() {
    return Math.floor(
        Math.random() * (999999 - 110000 + 1) + 110000,
    );
};

// generate token
UserSchema.methods.generateAuthToken = async function() {
    try {
        const token = jwt.sign({
            _id: this._id,
            role: this.role,
        },
        secretKey,
        {expiresIn: '1h'});
        await this.save();
        return token;
    } catch (error) {
        throw error;
    }
};

// eslint-disable-next-line
const User = new mongoose.model('User', UserSchema);
module.exports = User;
