// database/connection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/db.sqlite'
});

module.exports = sequelize;
