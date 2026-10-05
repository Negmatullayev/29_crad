const { Country } = require("../models");
const {
  validateCountry,
  validateCountryUpdate,
} = require("../validations/countryValidation");
const { Op } = require("sequelize");

exports.createCountry = async (req, res) => {
  const { error } = validateCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Country.create(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountrys = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const items = await Country.findAll();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountryById = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Country.findByPk(req.params.id, {});
    if (!item) return res.status(404).send("Country not found");
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCountry = async (req, res) => {
  const { error } = validateCountryUpdate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const item = await Country.findByPk(req.params.id);
    if (!item) return res.status(404).send("Country not found");

    await item.update(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCountry = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const item = await Country.findByPk(req.params.id);
    if (!item) return res.status(404).send({ error: "Country not found" });

    const data = item.toJSON();
    await item.destroy();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCountrys = async (req, res) => {
  if (req.params && req.params.id && isNaN(Number(req.params.id))) {
    return res.status(400).send("Invalid ID: ID must be a number");
  }
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const items = await Country.findAll({
      where: {
        [Op.or]: [{ country_name: { [Op.iLike]: `%${query}%` } }],
      },
    });

    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
