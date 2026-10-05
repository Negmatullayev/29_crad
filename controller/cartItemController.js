const { CartItem } = require("../models");
const {
  validateCartItem,
  validateCartItemUpdate,
} = require("../validations/cartItemValidation");
const { Op } = require("sequelize");

exports.createCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await CartItem.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartItems = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await CartItem.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCartItemById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await CartItem.findByPk(req.params.id, {
      include: [
        { model: Ticket, as: "ticket" },
        { model: Cart, as: "cart" },
      ],
    });
    if (!item) return res.status(404).send("CartItem not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCartItem = async (req, res) => {
  const { error } = validateCartItemUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await CartItem.findByPk(req.params.id);
    if (!item) return res.status(404).send("CartItem not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCartItem = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await CartItem.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "CartItem not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCartItems = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    return res.status(200).send(await CartItem.findAll());
  } catch (error) {
    res.status(500).send(error.message);
  }
};
