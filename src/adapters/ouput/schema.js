const Joi = require('joi');

module.exports = {
    users: Joi.object({
        username: Joi.string()
            .max(10)
            .required(),
        firstName: Joi.string()
            .max(20)
            .required(),
        lastName: Joi.string()
            .max(50)
            .required(),
    }),
    passwords: Joi.object({
        userId: Joi.required(),
        password: Joi.required(),
    }),
};