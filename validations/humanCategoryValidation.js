const Joi = require("joi");

const validateHumanCategory = (humanCategory) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    start_age: Joi.number().integer(),
    finish_age: Joi.number().integer(),
    gender_id: Joi.number().integer(),
  });
  return schema.validate(humanCategory);
};

const validateHumanCategoryUpdate = (humanCategory) => {
  const schema = Joi.object({
    name: Joi.string(),
    start_age: Joi.number().integer(),
    finish_age: Joi.number().integer(),
    gender_id: Joi.number().integer(),
  }).min(1);
  return schema.validate(humanCategory);
};

module.exports = { validateHumanCategory, validateHumanCategoryUpdate };
