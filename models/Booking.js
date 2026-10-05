module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    finished: {
      type: DataTypes.DATE,
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
    },
    delivery_method_id: {
      type: DataTypes.INTEGER,
    },
    discount_id: {
      type: DataTypes.INTEGER,
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.Cart, { foreignKey: "cart_id", as: "cart" });
    Booking.belongsTo(models.PaymentMethod, {
      foreignKey: "payment_method_id",
      as: "paymentMethod",
    });
    Booking.belongsTo(models.DeliveryMethod, {
      foreignKey: "delivery_method_id",
      as: "deliveryMethod",
    });
    Booking.belongsTo(models.Discount, {
      foreignKey: "discount_id",
      as: "discount",
    });
  };

  return Booking;
};
