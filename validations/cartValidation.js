const Joi = require("joi");

const validateCart = (cart) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    createdAt: Joi.string(),
    finishedAt: Joi.string(),
    status_id: Joi.number().integer(),
  });
  return schema.validate(cart);
};

const validateCartUpdate = (cart) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer(),
    createdAt: Joi.string(),
    finishedAt: Joi.string(),
    status_id: Joi.number().integer(),
  }).min(1);
  return schema.validate(cart);
};

module.exports = { validateCart, validateCartUpdate };
