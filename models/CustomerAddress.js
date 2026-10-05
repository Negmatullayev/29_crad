module.exports = (sequelize, DataTypes) => {

  const CustomerAddress = sequelize.define("CustomerAddress", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
    },
    district_id: {
      type: DataTypes.INTEGER,
    },
    street: {
      type: DataTypes.STRING,
    },
    house: {
      type: DataTypes.STRING,
    },
    flat_id: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.STRING,
    },
    post_index: {
      type: DataTypes.STRING,
    },
    info: {
      type: DataTypes.TEXT,
    },
  });

  CustomerAddress.associate = (models) => {
    CustomerAddress.belongsTo(models.Customer, { foreignKey: "customer_id", as: "customer" });
    CustomerAddress.belongsTo(models.Region, { foreignKey: "region_id", as: "region" });
    CustomerAddress.belongsTo(models.District, { foreignKey: "district_id", as: "district" });
    CustomerAddress.belongsTo(models.Flat, { foreignKey: "flat_id", as: "flat" });
  };

  return CustomerAddress;
};
