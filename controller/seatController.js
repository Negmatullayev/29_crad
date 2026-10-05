const { Seat } = require("../models");
const {
  validateSeat,
  validateSeatUpdate,
} = require("../validations/seatValidation");
const { Op } = require("sequelize");

exports.createSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Seat.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeats = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await Seat.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSeatById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Seat.findByPk(req.params.id, {
      include: [
        { model: Sector, as: "sector" },
        { model: Venue, as: "venue" },
        { model: SeatType, as: "seatType" },
      ],
    });
    if (!item) return res.status(404).send("Seat not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSeat = async (req, res) => {
  const { error } = validateSeatUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Seat.findByPk(req.params.id);
    if (!item) return res.status(404).send("Seat not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSeat = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Seat.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "Seat not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchSeats = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    return res.status(200).send(await Seat.findAll());
  } catch (error) {
    res.status(500).send(error.message);
  }
};
