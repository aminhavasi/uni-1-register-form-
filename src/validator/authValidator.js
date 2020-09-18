const Joi = require('joi');
const pattern = /^[a-zA-Z][a-zA-Z ]*[a-zA-Z]$/;
const registerValidator = (user) => {
    const Schema = Joi.object({
        name: Joi.string().required().max(124).regex(pattern),
        family: Joi.string().required().max(124).regex(pattern),
        phone: Joi.string()
            .required()
            .regex(/^[0-9][0-9]*[0-9]$/),
        dateOfBirth: Joi.string().required(),
        sex: Joi.string().required(),
        address: Joi.string().required().max(255),
        email: Joi.string().required().email(),
        instantPhone: Joi.number(),
        national: Joi.string().required(),
        nationalCode: Joi.number().required(),
    });

    return Schema.validate(user);
};

module.exports = { registerValidator };
