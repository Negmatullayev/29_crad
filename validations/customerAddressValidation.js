const Joi = require("joi");

const validateCustomerAddress = (customerAddress) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    name: Joi.string().required(),
    region_id: Joi.number().integer(),
    district_id: Joi.number().integer(),
    street: Joi.string(),
    house: Joi.string(),
    flat_id: Joi.number().integer(),
    location: Joi.string(),
    post_index: Joi.string(),
    info: Joi.string().allow(''),
  });
  return schema.validate(customerAddress);
};

const validateCustomerAddressUpdate = (customerAddress) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer(),
    name: Joi.string(),
    region_id: Joi.number().integer(),
    district_id: Joi.number().integer(),
    street: Joi.string(),
    house: Joi.string(),
    flat_id: Joi.number().integer(),
    location: Joi.string(),
    post_index: Joi.string(),
    info: Joi.string().allow(''),
  }).min(1);
  return schema.validate(customerAddress);
};

module.exports = { validateCustomerAddress, validateCustomerAddressUpdate };
