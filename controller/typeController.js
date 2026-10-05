const { Type } = require("../models");
const {
  validateType,
  validateTypeUpdate,
} = require("../validations/typeValidation");
const { Op } = require("sequelize");

exports.createType = async (req, res) => {
  const { error } = validateType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Type.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTypes = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await Type.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTypeById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Type.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Type not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateType = async (req, res) => {
  const { error } = validateTypeUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Type.findByPk(req.params.id);
    if (!item) return res.status(404).send("Type not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteType = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Type.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "Type not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTypes = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const items = await Type.findAll({
      where: {
        [Op.or]: [{ name: { [Op.iLike]: `%${query}%` } }],
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
