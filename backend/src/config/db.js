import { Sequelize } from "sequelize";

const database = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: '../../banco.sqlite'
});

export default database;
