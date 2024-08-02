import database, { DataTypes } from "../config/db.js";
import Favorite from "./Favorites.js";

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
      unique: true
    },
    dicasDeVisitacao: {
      type: DataTypes.STRING,
    },
    imagem: {
      type: DataTypes.TEXT,
    },
    mapa: {
      type: DataTypes.TEXT,
    }
  },

  { tableName: 'atrativos' }

);

Atrativo.belongsTo(Favorite, { foreignKey: 'id' });

export default Atrativo;
