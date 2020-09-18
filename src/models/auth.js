const mongoose = require('mongoose');
const authSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
});
const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;
