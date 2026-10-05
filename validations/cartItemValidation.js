const Joi = require("joi");

const validateCartItem = (cartItem) => {
  const schema = Joi.object({
    ticket_id: Joi.number().integer().required(),
    cart_id: Joi.number().integer().required(),
  });
  return schema.validate(cartItem);
};

const validateCartItemUpdate = (cartItem) => {
  const schema = Joi.object({
    ticket_id: Joi.number().integer(),
    cart_id: Joi.number().integer(),
  }).min(1);
  return schema.validate(cartItem);
};

module.exports = { validateCartItem, validateCartItemUpdate };
