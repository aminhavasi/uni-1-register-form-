const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 124,
    },
    family: {
        type: String,
        trim: true,
        required: true,
        maxlength: 124,
    },
    personnelId: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        maxlength: 255,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        unique: true,
    },
    instantPhone: {
        type: Number,
    },
    national: {
        type: String,
        required: true,
        maxlength: 64,
    },
    nationalCode: {
        type: Number,
        required: true,
        unique: true,
    },
});

userSchema.virtual('user', {
    ref: 'Auth',
    localField: '_id',
    foreignField: 'user',
});

const User = mongoose.model('User', userSchema);
module.exports = User;
