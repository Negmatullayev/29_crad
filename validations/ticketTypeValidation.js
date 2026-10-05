const Joi = require("joi");

const validateTicketType = (ticketType) => {
  const schema = Joi.object({
    ticket_type: Joi.string().required(),
  });
  return schema.validate(ticketType);
};

const validateTicketTypeUpdate = (ticketType) => {
  const schema = Joi.object({
    ticket_type: Joi.string(),
  }).min(1);
  return schema.validate(ticketType);
};

module.exports = { validateTicketType, validateTicketTypeUpdate };
