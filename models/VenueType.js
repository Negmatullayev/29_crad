module.exports = (sequelize, DataTypes) => {
  const VenueType = sequelize.define("VenueType", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  VenueType.associate = (models) => {
    VenueType.belongsTo(models.Venue, { foreignKey: "venueId", as: "venue" });
    VenueType.belongsTo(models.Type, { foreignKey: "typeId", as: "type" });
  };

  return VenueType;
};
