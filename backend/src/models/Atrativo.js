// import { DataTypes } from "sequelize";
// import database from "../config/db.js";

const { DataTypes } = require("sequelize");
const database = require("../config/db");
const Favorito = require("./Favorito");
const User = require("./User.js");

const Atrativo = database.define(
  'Atrativo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
    },
    imagem: {
      type: DataTypes.TEXT,
    },
    mapas: {
      type: DataTypes.TEXT,
    },
    dicasDeVisitacao: {
      type: DataTypes.STRING,
    }
  },

  { tableName: 'atrativos' }
);

// Atrativo.belongsToMany(User, { through: 'favoritos', foreignKey: 'AtrativoId' });
// export default Atrativo;


module.exports = Atrativo;
