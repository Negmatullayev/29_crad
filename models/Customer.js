const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATEONLY,
    },
    gender_id: {
      type: DataTypes.INTEGER,
    },
    lang_id: {
      type: DataTypes.INTEGER,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
    },
  });

  Customer.associate = (models) => {
    Customer.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
    Customer.belongsTo(models.Lang, { foreignKey: "lang_id", as: "lang" });
  };

  Customer.beforeSave(async (record) => {
    const passwordField = "hashed_password";
    if (record.changed(passwordField) && record.get(passwordField)) {
      record.set(
        passwordField,
        await bcrypt.hash(record.get(passwordField), 10),
      );
    }
  });

  return Customer;
};
