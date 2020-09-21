const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const authSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
});

authSchema.pre('save', function (next) {
    let user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});
const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;
