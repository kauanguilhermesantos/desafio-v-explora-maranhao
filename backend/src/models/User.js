// import { DataTypes } from "sequelize";
// import database from "../config/db.js";

const { DataTypes } = require("sequelize");
const database = require("../config/db");
const Favorito = require("./Favorito");
const Atrativo = require("./Atrativo");


const User = database.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      //  autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },

  { tableName: 'users' }
);


User.belongsToMany(Atrativo, { through: 'favoritos', foreignKey: 'UserId' });
Atrativo.belongsToMany(User, { through: 'favoritos', foreignKey: 'AtrativoId' });

// export default User;
module.exports = User;
