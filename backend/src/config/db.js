const { Sequelize } = require("sequelize");

const database = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: '../../banco.sqlite'
});

module.exports = database;
