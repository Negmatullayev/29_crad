module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    finish_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    info: {
      type: DataTypes.TEXT,
    },
    event_type_id: {
      type: DataTypes.INTEGER,
    },
    human_category_id: {
      type: DataTypes.INTEGER,
    },
    venue_id: {
      type: DataTypes.INTEGER,
    },
    lang_id: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATEONLY,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.EventType, {
      foreignKey: "event_type_id",
      as: "eventType",
    });
    Event.belongsTo(models.HumanCategory, {
      foreignKey: "human_category_id",
      as: "humanCategory",
    });
    Event.belongsTo(models.Venue, { foreignKey: "venue_id", as: "venue" });
    Event.belongsTo(models.Lang, { foreignKey: "lang_id", as: "lang" });
  };

  return Event;
};
