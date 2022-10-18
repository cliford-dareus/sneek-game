const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type : 'String',
        required: [true, 'must provide an username'],
        maxlength: [20, 'username must be 20 character or less'],
        trim: true
    },
    email: {
        type: 'String',
        required: [true, 'must provide an email'],
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please prove a valid eanil'
        ],
        unique: true
    },
    password: {
        type: 'String',
        required: [true, 'Password must be provided'],
        minlength:[5, 'Password cant be less than 5 character']
    },
});

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
    return jwt.sign(
        {
        userId: this._id,
        name: this.name},
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_LIFETIME
        }
    )
};

UserSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};

module.exports = mongoose.model('User', UserSchema);