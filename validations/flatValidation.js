const Joi = require("joi");

const validateFlat = (flat) => {
  const schema = Joi.object({
    etaj: Joi.number().integer(),
    condition: Joi.string(),
  });
  return schema.validate(flat);
};

const validateFlatUpdate = (flat) => {
  const schema = Joi.object({
    etaj: Joi.number().integer(),
    condition: Joi.string(),
  }).min(1);
  return schema.validate(flat);
};

module.exports = { validateFlat, validateFlatUpdate };
