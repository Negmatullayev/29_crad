const { DeliveryMethod } = require("../models");
const {
  validateDeliveryMethod,
  validateDeliveryMethodUpdate,
} = require("../validations/deliveryMethodValidation");
const { Op } = require("sequelize");

exports.createDeliveryMethod = async (req, res) => {
  const { error } = validateDeliveryMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await DeliveryMethod.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDeliveryMethods = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await DeliveryMethod.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDeliveryMethodById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await DeliveryMethod.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("DeliveryMethod not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDeliveryMethod = async (req, res) => {
  const { error } = validateDeliveryMethodUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await DeliveryMethod.findByPk(req.params.id);
    if (!item) return res.status(404).send("DeliveryMethod not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDeliveryMethod = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await DeliveryMethod.findByPk(req.params.id);
    if (!item)
      return res.status(404).send({ error: "DeliveryMethod not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDeliveryMethods = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const items = await DeliveryMethod.findAll({
      where: {
        [Op.or]: [{ name: { [Op.iLike]: `%${query}%` } }],
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
