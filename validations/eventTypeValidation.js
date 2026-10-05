const Joi = require("joi");

const validateEventType = (eventType) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    parent_event_type_id: Joi.number().integer(),
  });
  return schema.validate(eventType);
};

const validateEventTypeUpdate = (eventType) => {
  const schema = Joi.object({
    name: Joi.string(),
    parent_event_type_id: Joi.number().integer(),
  }).min(1);
  return schema.validate(eventType);
};

module.exports = { validateEventType, validateEventTypeUpdate };
