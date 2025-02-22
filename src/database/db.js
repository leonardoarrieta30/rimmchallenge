const Sequelize = require("sequelize");
const { database } = require("../config");
const sequelize = new Sequelize(
  database.database,
  database.user,
  database.password,
  {
    host: database.host,
    dialect: database.dialect,
    timezone: "-05:00",
    port: database.port,
    dialectOptions: {
      connectTimeout: 60000 // tiempo en ms, por ejemplo 60s
    }
  }
);

module.exports = sequelize;
