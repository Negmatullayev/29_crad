const Joi = require("joi");

const validateVenue = (venue) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string(),
    location: Joi.string(),
    site: Joi.string(),
    phone: Joi.string(),
    schema: Joi.string().allow(''),
    region_id: Joi.number().integer(),
    district_id: Joi.number().integer(),
  });
  return schema.validate(venue);
};

const validateVenueUpdate = (venue) => {
  const schema = Joi.object({
    name: Joi.string(),
    address: Joi.string(),
    location: Joi.string(),
    site: Joi.string(),
    phone: Joi.string(),
    schema: Joi.string().allow(''),
    region_id: Joi.number().integer(),
    district_id: Joi.number().integer(),
  }).min(1);
  return schema.validate(venue);
};

module.exports = { validateVenue, validateVenueUpdate };
