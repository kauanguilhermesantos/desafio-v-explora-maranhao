import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  storage: '../../banco.sqlite'
});

export default sequelize;
