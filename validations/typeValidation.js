const Joi = require("joi");

const validateType = (type) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(type);
};

const validateTypeUpdate = (type) => {
  const schema = Joi.object({
    name: Joi.string(),
  }).min(1);
  return schema.validate(type);
};

module.exports = { validateType, validateTypeUpdate };
