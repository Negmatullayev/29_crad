const { Cart } = require("../models");
const {
  validateCart,
  validateCartUpdate,
} = require("../validations/cartValidation");
const { Op } = require("sequelize");

exports.createCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Cart.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCarts = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await Cart.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Cart.findByPk(req.params.id, {
      include: [{ model: Customer, as: "customer" }],
    });
    if (!item) return res.status(404).send("Cart not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCart = async (req, res) => {
  const { error } = validateCartUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Cart.findByPk(req.params.id);
    if (!item) return res.status(404).send("Cart not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCart = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Cart.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "Cart not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCarts = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    return res.status(200).send(await Cart.findAll());
  } catch (error) {
    res.status(500).send(error.message);
  }
};
