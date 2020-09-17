const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    family: {
        type: String,
        trim: true,
        required: true,
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
    addrees: {
        type: String,
        required: true,
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
    },
    nationalCode: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
