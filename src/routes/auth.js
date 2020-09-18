const express = require('express');
const router = express.Router();
const Auth = require('./../models/auth');
let persianDate = require('persian-date');
persianDate.toLocale('en');
const date = new persianDate().format('YYYY/M/DD');
const { registerValidator } = require('./../validator/authValidator');

router.post('/', async (req, res) => {
    const { error } = await registerValidator(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    try {
        const user = Auth.findOne({ nationCode: req.body.nationCode });
        if (user) return res.status(400).send('bad ');
        req.body.date = date;
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;
