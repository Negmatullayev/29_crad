const { Event } = require("../models");
const {
  validateEvent,
  validateEventUpdate,
} = require("../validations/eventValidation");
const { Op } = require("sequelize");

exports.createEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Event.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEvents = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await Event.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Event.findByPk(req.params.id, {
      include: [
        { model: EventType, as: "eventType" },
        { model: HumanCategory, as: "humanCategory" },
        { model: Venue, as: "venue" },
        { model: Lang, as: "lang" },
      ],
    });
    if (!item) return res.status(404).send("Event not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEvent = async (req, res) => {
  const { error } = validateEventUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Event.findByPk(req.params.id);
    if (!item) return res.status(404).send("Event not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEvent = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Event.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "Event not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchEvents = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const items = await Event.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { info: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
