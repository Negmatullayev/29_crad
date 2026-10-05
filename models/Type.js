module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define("Type", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Type.associate = (models) => {};

  return Type;
};
