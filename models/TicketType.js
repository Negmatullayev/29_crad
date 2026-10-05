module.exports = (sequelize, DataTypes) => {
  const TicketType = sequelize.define("TicketType", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  TicketType.associate = (models) => {};

  return TicketType;
};
