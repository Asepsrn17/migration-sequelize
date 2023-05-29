module.exports = (sequelizeConnection, Sequelize) => {
  const Bus = sequelizeConnection.define("Bus", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    nameBus: {
      type: Sequelize.STRING,
    },
    numberPlate: {
      type: Sequelize.STRING,
    },
    capacity: {
      type: Sequelize.INTEGER,
    },
  });

  return Bus;
};
