const Joi = require("joi");

const validateEvent = (event) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    photo: Joi.string(),
    start_date: Joi.string().required(),
    start_time: Joi.string().required(),
    finish_date: Joi.string().required(),
    finish_time: Joi.string().required(),
    info: Joi.string().allow(''),
    event_type_id: Joi.number().integer(),
    human_category_id: Joi.number().integer(),
    venue_id: Joi.number().integer(),
    lang_id: Joi.number().integer(),
    release_date: Joi.string(),
  });
  return schema.validate(event);
};

const validateEventUpdate = (event) => {
  const schema = Joi.object({
    name: Joi.string(),
    photo: Joi.string(),
    start_date: Joi.string(),
    start_time: Joi.string(),
    finish_date: Joi.string(),
    finish_time: Joi.string(),
    info: Joi.string().allow(''),
    event_type_id: Joi.number().integer(),
    human_category_id: Joi.number().integer(),
    venue_id: Joi.number().integer(),
    lang_id: Joi.number().integer(),
    release_date: Joi.string(),
  }).min(1);
  return schema.validate(event);
};

module.exports = { validateEvent, validateEventUpdate };
