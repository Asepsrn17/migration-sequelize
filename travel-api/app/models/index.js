const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelizeConnection = new Sequelize(
  config.DBNAME,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelizeConnection = sequelizeConnection;

db.role = require("./role.model")(sequelizeConnection, Sequelize);
db.user = require("./user.model")(sequelizeConnection, Sequelize);

db.bus = require("./bus.model")(sequelizeConnection, Sequelize);
db.booking = require("./booking.model")(sequelizeConnection, Sequelize);

db.user.hasOne(db.booking, { foreignKey: "userId" });
db.booking.belongsTo(db.user, { foreignKey: "userId", allowNull: true });
db.booking.belongsTo(db.bus, { foreignKey: "busId", allowNull: true });

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin"];

module.exports = db;
