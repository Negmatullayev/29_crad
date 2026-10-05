const Joi = require("joi");

const validateBooking = (booking) => {
  const schema = Joi.object({
    cart_id: Joi.number().integer().required(),
    createdAt: Joi.string(),
    finished: Joi.string(),
    payment_method_id: Joi.number().integer(),
    delivery_method_id: Joi.number().integer(),
    discount_id: Joi.number().integer(),
    status_id: Joi.number().integer(),
  });
  return schema.validate(booking);
};

const validateBookingUpdate = (booking) => {
  const schema = Joi.object({
    cart_id: Joi.number().integer(),
    createdAt: Joi.string(),
    finished: Joi.string(),
    payment_method_id: Joi.number().integer(),
    delivery_method_id: Joi.number().integer(),
    discount_id: Joi.number().integer(),
    status_id: Joi.number().integer(),
  }).min(1);
  return schema.validate(booking);
};

module.exports = { validateBooking, validateBookingUpdate };
