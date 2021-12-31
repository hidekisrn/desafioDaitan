const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.devices = require("./device.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);

db.devices.belongsTo(db.categories, {
  foreignKey: "category_id",
  as: "category",
});

module.exports = db;
