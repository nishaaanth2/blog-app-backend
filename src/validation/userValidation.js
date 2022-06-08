const joi = require('joi');

exports.loginValidation = (req) => {
    let schema = joi.object().keys(Object.assign({
        phNo : joi.string().length(10).pattern(/^[0-9]+$/).required(),
        password : joi.string().required()
    }));
    return schema.validate(req, {abortEarly: false});
}
exports.createUserValidation = (req) => {
    let schema = joi.object().keys(Object.assign({
        phNo : joi.string().length(10).pattern(/^[0-9]+$/).required(),
        password : joi.string().required()
    }));
    return schema.validate(req, {abortEarly: false});
}