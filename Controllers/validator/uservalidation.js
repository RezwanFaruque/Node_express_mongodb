const Joi = require("joi");

exports.registervalidator = (data)=>{
    const schema = Joi.object({
        name: Joi.string().min(6).max(30).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    })

    return schema.validate(data);
};



