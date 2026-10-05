const { Booking } = require("../models");
const {
  validateBooking,
  validateBookingUpdate,
} = require("../validations/bookingValidation");
const { Op } = require("sequelize");

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Booking.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookings = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await Booking.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBookingById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Booking.findByPk(req.params.id, {
      include: [
        { model: Cart, as: "cart" },
        { model: PaymentMethod, as: "paymentMethod" },
        { model: DeliveryMethod, as: "deliveryMethod" },
        { model: Discount, as: "discount" },
      ],
    });
    if (!item) return res.status(404).send("Booking not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBookingUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Booking.findByPk(req.params.id);
    if (!item) return res.status(404).send("Booking not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteBooking = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Booking.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "Booking not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchBookings = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    return res.status(200).send(await Booking.findAll());
  } catch (error) {
    res.status(500).send(error.message);
  }
};
