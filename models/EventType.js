module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define("EventType", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parent_event_type_id: {
      type: DataTypes.INTEGER,
    },
  });

  EventType.associate = (models) => {
    EventType.belongsTo(models.EventType, {
      foreignKey: "parent_event_type_id",
      as: "parentEventType",
    });
  };

  return EventType;
};
