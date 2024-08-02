import database, { DataTypes } from "../config/db.js";
import Favorite from "./Favorites.js";

const User = database.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    userFavorites: {
      // foreignkey
      type: DataTypes.INTEGER,
    }
  },

  { tableName: 'users' }
);

User.belongsTo(Favorite, { foreignKey: 'userFavorites' });

export default User;
