const Joi = require("joi");

const validateTicket = (ticket) => {
  const schema = Joi.object({
    event_id: Joi.number().integer().required(),
    seat_id: Joi.number().integer().required(),
    price: Joi.number().required(),
    service_fee: Joi.number(),
    status_id: Joi.number().integer(),
    ticket_type_id: Joi.number().integer(),
  });
  return schema.validate(ticket);
};

const validateTicketUpdate = (ticket) => {
  const schema = Joi.object({
    event_id: Joi.number().integer(),
    seat_id: Joi.number().integer(),
    price: Joi.number(),
    service_fee: Joi.number(),
    status_id: Joi.number().integer(),
    ticket_type_id: Joi.number().integer(),
  }).min(1);
  return schema.validate(ticket);
};

module.exports = { validateTicket, validateTicketUpdate };
