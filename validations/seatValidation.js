const Joi = require("joi");

const validateSeat = (seat) => {
  const schema = Joi.object({
    sector_id: Joi.number().integer(),
    row_number: Joi.number().integer(),
    number: Joi.number().integer(),
    venue_id: Joi.number().integer().required(),
    seat_type_id: Joi.number().integer(),
    location_in_schema: Joi.string(),
  });
  return schema.validate(seat);
};

const validateSeatUpdate = (seat) => {
  const schema = Joi.object({
    sector_id: Joi.number().integer(),
    row_number: Joi.number().integer(),
    number: Joi.number().integer(),
    venue_id: Joi.number().integer(),
    seat_type_id: Joi.number().integer(),
    location_in_schema: Joi.string(),
  }).min(1);
  return schema.validate(seat);
};

module.exports = { validateSeat, validateSeatUpdate };
