const { CustomerAddress } = require("../models");
const {
  validateCustomerAddress,
  validateCustomerAddressUpdate,
} = require("../validations/customerAddressValidation");
const { Op } = require("sequelize");

exports.createCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await CustomerAddress.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddresss = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await CustomerAddress.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomerAddressById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await CustomerAddress.findByPk(req.params.id, {
      include: [
        { model: Customer, as: "customer" },
        { model: Region, as: "region" },
        { model: District, as: "district" },
        { model: Flat, as: "flat" },
      ],
    });
    if (!item) return res.status(404).send("CustomerAddress not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomerAddress = async (req, res) => {
  const { error } = validateCustomerAddressUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await CustomerAddress.findByPk(req.params.id);
    if (!item) return res.status(404).send("CustomerAddress not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomerAddress = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await CustomerAddress.findByPk(req.params.id);
    if (!item)
      return res.status(404).send({ error: "CustomerAddress not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCustomerAddresss = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const items = await CustomerAddress.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { street: { [Op.iLike]: `%${query}%` } },
          { house: { [Op.iLike]: `%${query}%` } },
          { post_index: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
