const express = require('express');
const router = express.Router();
const Auth = require('./../models/auth');
const { registerValidator } = require('./../validator/authValidator');

router.post('/', async (req, res) => {
    const { error } = await registerValidator(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    try {
        res.send('ok');
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = router;
