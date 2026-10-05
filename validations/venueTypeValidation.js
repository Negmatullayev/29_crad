const Joi = require("joi");

const validateVenueType = (venueType) => {
  const schema = Joi.object({
    venueId: Joi.number().integer().required(),
    typeId: Joi.number().integer().required(),
  });
  return schema.validate(venueType);
};

const validateVenueTypeUpdate = (venueType) => {
  const schema = Joi.object({
    venueId: Joi.number().integer(),
    typeId: Joi.number().integer(),
  }).min(1);
  return schema.validate(venueType);
};

module.exports = { validateVenueType, validateVenueTypeUpdate };
