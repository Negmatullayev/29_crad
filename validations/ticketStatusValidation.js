const Joi = require("joi");

const validateTicketStatus = (ticketStatus) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(ticketStatus);
};

const validateTicketStatusUpdate = (ticketStatus) => {
  const schema = Joi.object({
    name: Joi.string(),
  }).min(1);
  return schema.validate(ticketStatus);
};

module.exports = { validateTicketStatus, validateTicketStatusUpdate };
