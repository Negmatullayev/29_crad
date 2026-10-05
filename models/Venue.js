module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    site: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    schema: {
      type: DataTypes.TEXT,
    },
    region_id: {
      type: DataTypes.INTEGER,
    },
    district_id: {
      type: DataTypes.INTEGER,
    },
  });

  Venue.associate = (models) => {
    Venue.belongsTo(models.Region, { foreignKey: "region_id", as: "region" });
    Venue.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
    });
  };

  return Venue;
};
