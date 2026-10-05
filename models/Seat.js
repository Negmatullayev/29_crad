module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define("Seat", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sector_id: {
      type: DataTypes.INTEGER,
    },
    row_number: {
      type: DataTypes.INTEGER,
    },
    number: {
      type: DataTypes.INTEGER,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seat_type_id: {
      type: DataTypes.INTEGER,
    },
    location_in_schema: {
      type: DataTypes.STRING,
    },
  });

  Seat.associate = (models) => {
    Seat.belongsTo(models.Sector, { foreignKey: "sector_id", as: "sector" });
    Seat.belongsTo(models.Venue, { foreignKey: "venue_id", as: "venue" });
    Seat.belongsTo(models.SeatType, {
      foreignKey: "seat_type_id",
      as: "seatType",
    });
  };

  return Seat;
};
