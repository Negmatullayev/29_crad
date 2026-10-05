const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || "postgres",
    logging: false,
  },
);

const db = {};
db.Admin = require("./Admin")(sequelize, DataTypes);
db.Customer = require("./Customer")(sequelize, DataTypes);
db.CustomerCard = require("./CustomerCard")(sequelize, DataTypes);
db.CustomerAddress = require("./CustomerAddress")(sequelize, DataTypes);
db.Event = require("./Event")(sequelize, DataTypes);
db.EventType = require("./EventType")(sequelize, DataTypes);
db.Ticket = require("./Ticket")(sequelize, DataTypes);
db.TicketType = require("./TicketType")(sequelize, DataTypes);
db.TicketStatus = require("./TicketStatus")(sequelize, DataTypes);
db.Cart = require("./Cart")(sequelize, DataTypes);
db.CartItem = require("./CartItem")(sequelize, DataTypes);
db.Booking = require("./Booking")(sequelize, DataTypes);
db.PaymentMethod = require("./PaymentMethod")(sequelize, DataTypes);
db.DeliveryMethod = require("./DeliveryMethod")(sequelize, DataTypes);
db.Discount = require("./Discount")(sequelize, DataTypes);
db.Venue = require("./Venue")(sequelize, DataTypes);
db.VenuePhoto = require("./VenuePhoto")(sequelize, DataTypes);
db.VenueType = require("./VenueType")(sequelize, DataTypes);
db.Seat = require("./Seat")(sequelize, DataTypes);
db.SeatType = require("./SeatType")(sequelize, DataTypes);
db.Region = require("./Region")(sequelize, DataTypes);
db.District = require("./District")(sequelize, DataTypes);
db.Sector = require("./Sector")(sequelize, DataTypes);
db.Country = require("./Country")(sequelize, DataTypes);
db.Gender = require("./Gender")(sequelize, DataTypes);
db.Lang = require("./Lang")(sequelize, DataTypes);
db.HumanCategory = require("./HumanCategory")(sequelize, DataTypes);
db.Type = require("./Type")(sequelize, DataTypes);
db.Flat = require("./Flat")(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
