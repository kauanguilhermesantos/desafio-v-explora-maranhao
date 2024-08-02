// import { Sequelize } from "sequelize";
const { Sequelize } = require("sequelize");

const database = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: './banco.sqlite'
});

// export default database;
module.exports = database;
