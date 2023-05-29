module.exports = (sequlizeConnection, Sequelize) => {
  const Role = sequlizeConnection.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Role;
};
