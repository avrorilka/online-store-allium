const { Sequelize } = require("sequelize");
require('dotenv').config();

process.on('uncaughtException', (err) => {
  console.log('Error! Shutting down connection...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});
 
var initModels = require("./models/init-models");
var models = initModels(sequelize);

module.exports = sequelize;