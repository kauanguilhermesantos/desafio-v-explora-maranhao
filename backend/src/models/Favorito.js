// import { DataTypes } from "sequelize";
// import database from "../config/db.js";
// import User from "./UserModel.js"
// import Atrativo from "./AtrativoModel.js";

const { DataTypes } = require("sequelize");
const database = require("../config/db.js");
const User = require("./User.js");
const Atrativo = require("./Atrativo.js");

const Favorito = database.define(
  'Favorito',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    UserId: {
      type: DataTypes.INTEGER,
      references: { model: 'User', key: 'id' }
    },

    AtrativoId: {
      type: DataTypes.INTEGER,
      references: { model: 'Atrativo', key: 'id' }
    }

  },

  { tableName: 'favoritos' }
);



// export default Favorito;
module.exports = Favorito;
