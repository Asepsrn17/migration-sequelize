module.exports = (sequelizeConnection, Sequelize) => {
  const Booking = sequelizeConnection.define("bookings", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    destination: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    trip_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  });

  return Booking;
};
