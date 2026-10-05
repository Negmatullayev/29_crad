module.exports = (sequelize, DataTypes) => {
  const Flat = sequelize.define("Flat", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    etaj: {
      type: DataTypes.INTEGER,
    },
    condition: {
      type: DataTypes.STRING,
    },
  });

  Flat.associate = (models) => {};

  return Flat;
};
