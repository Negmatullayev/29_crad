const { VenueType } = require("../models");
const {
  validateVenueType,
  validateVenueTypeUpdate,
} = require("../validations/venueTypeValidation");
const { Op } = require("sequelize");

exports.createVenueType = async (req, res) => {
  const { error } = validateVenueType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await VenueType.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueTypes = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await VenueType.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueTypeById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await VenueType.findByPk(req.params.id, {
      include: [
        { model: Venue, as: "venue" },
        { model: Type, as: "type" },
      ],
    });
    if (!item) return res.status(404).send("VenueType not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenueType = async (req, res) => {
  const { error } = validateVenueTypeUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await VenueType.findByPk(req.params.id);
    if (!item) return res.status(404).send("VenueType not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenueType = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await VenueType.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "VenueType not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchVenueTypes = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    return res.status(200).send(await VenueType.findAll());
  } catch (error) {
    res.status(500).send(error.message);
  }
};
