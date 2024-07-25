import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Atrativo = sequelize.define(
  'Atrativo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
    tipo: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.STRING,
      unique: true
    },
    dicasDeVisitacao: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }
);

export default Atrativo;
