const express = require('express');
const router = express.Router();
const Auth = require('./../models/auth');
let persianDate = require('persian-date');
persianDate.toLocale('en');
const date = new persianDate().format('YYYY/M/DD');
const { registerValidator } = require('./../validator/authValidator');
const User = require('./../models/user');
const { ID } = require('./../functions/personnelID');

router.post('/', async (req, res) => {
    const { error } = await registerValidator(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    try {
        const user = await User.findOne({
            nationalCode: req.body.nationalCode,
        });
        if (user) return res.status(400).send('This User Already Exict!');
        req.body.date = date;
        req.body.personnelId = await ID();
        const newUser = await new User(req.body);
        const savedUser = await newUser.save();
        const userAuth = await Auth.findOne({ user: savedUser._id });
        if (userAuth) return res.status(200).send('Password Already Exict!');
        const newAuth = await new Auth({
            user: savedUser._id,
            password: savedUser.nationalCode,
        });
        await newAuth.save();
        res.status(201).send('user success added');
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
