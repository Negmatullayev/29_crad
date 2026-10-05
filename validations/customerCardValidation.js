const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    number: Joi.string().required(),
    year: Joi.string(),
    month: Joi.string(),
    is_active: Joi.boolean(),
    is_main: Joi.boolean(),
  });
  return schema.validate(customerCard);
};

const validateCustomerCardUpdate = (customerCard) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer(),
    name: Joi.string(),
    phone: Joi.string(),
    number: Joi.string(),
    year: Joi.string(),
    month: Joi.string(),
    is_active: Joi.boolean(),
    is_main: Joi.boolean(),
  }).min(1);
  return schema.validate(customerCard);
};

module.exports = { validateCustomerCard, validateCustomerCardUpdate };
