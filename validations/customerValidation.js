const Joi = require("joi");

const validateCustomer = (customer) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone: Joi.string().required(),
    hashed_password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    birth_date: Joi.string(),
    gender_id: Joi.number().integer(),
    lang_id: Joi.number().integer(),
    hashed_refresh_token: Joi.string(),
  });
  return schema.validate(customer);
};

const validateCustomerUpdate = (customer) => {
  const schema = Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    phone: Joi.string(),
    hashed_password: Joi.string().min(6),
    email: Joi.string().email(),
    birth_date: Joi.string(),
    gender_id: Joi.number().integer(),
    lang_id: Joi.number().integer(),
    hashed_refresh_token: Joi.string(),
  }).min(1);
  return schema.validate(customer);
};

module.exports = { validateCustomer, validateCustomerUpdate };
