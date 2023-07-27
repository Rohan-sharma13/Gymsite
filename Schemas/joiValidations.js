const Joi = require("@hapi/joi");

const registerationValidation = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(50).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6),
    phoneNumber: Joi.string()
      .regex(/^\92?([0-9]{11})\)?$/)
      .required(),
    membership: Joi.string(),
  });
  return schema.validate(data);
};

const contactValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    phoneNumber: Joi.string()
      .regex(/^\92?([0-9]{11})\)?$/)
      .required(),
    firstName: Joi.string().min(3).max(20).required(),
    lastName: Joi.string().min(3).max(20).required(),
    message: Joi.string().min(10).max(100).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerationValidation;
module.exports.loginValidation = loginValidation;
module.exports.contactValidation = contactValidation;
