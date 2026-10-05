const Joi = require("joi");

const validateCountry = (country) => {
  const schema = Joi.object({
    country_name: Joi.string().required(),
  });
  return schema.validate(country);
};

const validateCountryUpdate = (country) => {
  const schema = Joi.object({
    country_name: Joi.string(),
  }).min(1);
  return schema.validate(country);
};

module.exports = { validateCountry, validateCountryUpdate };
