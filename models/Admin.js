const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    is_creator: {
      type: DataTypes.BOOLEAN,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
    },
  });

  Admin.associate = (models) => {};

  Admin.beforeSave(async (record) => {
    const passwordField = "hashed_password";
    if (record.changed(passwordField) && record.get(passwordField)) {
      record.set(
        passwordField,
        await bcrypt.hash(record.get(passwordField), 10),
      );
    }
  });

  return Admin;
};
