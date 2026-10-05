const Joi = require("joi");

const validateVenuePhoto = (venuePhoto) => {
  const schema = Joi.object({
    venueId: Joi.number().integer().required(),
    url: Joi.string().required(),
  });
  return schema.validate(venuePhoto);
};

const validateVenuePhotoUpdate = (venuePhoto) => {
  const schema = Joi.object({
    venueId: Joi.number().integer(),
    url: Joi.string(),
  }).min(1);
  return schema.validate(venuePhoto);
};

module.exports = { validateVenuePhoto, validateVenuePhotoUpdate };
