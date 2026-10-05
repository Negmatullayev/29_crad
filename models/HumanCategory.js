module.exports = (sequelize, DataTypes) => {
  const HumanCategory = sequelize.define("HumanCategory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_age: {
      type: DataTypes.INTEGER,
    },
    finish_age: {
      type: DataTypes.INTEGER,
    },
    gender_id: {
      type: DataTypes.INTEGER,
    },
  });

  HumanCategory.associate = (models) => {
    HumanCategory.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
  };

  return HumanCategory;
};
