import database, { DataTypes } from "../config/db.js";
import Favorito from "./FavoritoModel.js";

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

Atrativo.belongsTo(Favorito, { foreignKey: 'id' });

export default Atrativo;
