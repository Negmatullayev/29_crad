const { TicketStatus } = require("../models");
const {
  validateTicketStatus,
  validateTicketStatusUpdate,
} = require("../validations/ticketStatusValidation");
const { Op } = require("sequelize");

exports.createTicketStatus = async (req, res) => {
  const { error } = validateTicketStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await TicketStatus.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketStatuss = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await TicketStatus.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketStatusById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await TicketStatus.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("TicketStatus not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicketStatus = async (req, res) => {
  const { error } = validateTicketStatusUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await TicketStatus.findByPk(req.params.id);
    if (!item) return res.status(404).send("TicketStatus not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicketStatus = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await TicketStatus.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "TicketStatus not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicketStatuss = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const items = await TicketStatus.findAll({
      where: {
        [Op.or]: [{ name: { [Op.iLike]: `%${query}%` } }],
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
