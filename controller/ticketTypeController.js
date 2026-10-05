const { TicketType } = require("../models");
const {
  validateTicketType,
  validateTicketTypeUpdate,
} = require("../validations/ticketTypeValidation");
const { Op } = require("sequelize");

exports.createTicketType = async (req, res) => {
  const { error } = validateTicketType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await TicketType.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketTypes = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await TicketType.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketTypeById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await TicketType.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("TicketType not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicketType = async (req, res) => {
  const { error } = validateTicketTypeUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await TicketType.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketType not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicketType = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await TicketType.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "TicketType not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicketTypes = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const items = await TicketType.findAll({
      where: {
        [Op.or]: [{ ticket_type: { [Op.iLike]: `%${query}%` } }],
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
