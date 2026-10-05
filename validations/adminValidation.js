const Joi = require("joi");

const adminSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required(),
  login: Joi.string().trim().alphanum().min(3).max(50).required(),
  hashed_password: Joi.string().min(6).required(),
  is_active: Joi.boolean().default(true),
  is_creator: Joi.boolean().default(false),
  hashed_refresh_token: Joi.string().allow(null, ""),
});

const adminUpdateSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100),
  login: Joi.string().trim().alphanum().min(3).max(50),
  hashed_password: Joi.string().min(6),
  is_active: Joi.boolean(),
  is_creator: Joi.boolean(),
  hashed_refresh_token: Joi.string().allow(null, ""),
}).min(1);

module.exports = { validateAdmin, validateAdminUpdate };