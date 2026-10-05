module.exports = (sequelize, DataTypes) => {
  const TicketStatus = sequelize.define("TicketStatus", {
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

  TicketStatus.associate = (models) => {};

  return TicketStatus;
};
