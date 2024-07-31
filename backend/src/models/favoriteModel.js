import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./userModel.js";


const Favorite = sequelize.define(
  'Favorite',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      //  autoIncrement: true
    },
    id_atrativo: {
      type: DataTypes.INTEGER,
    }
  }
);

Favorite.belongsTo(User);
User.hasMany(Favorite);

export default Favorite;
