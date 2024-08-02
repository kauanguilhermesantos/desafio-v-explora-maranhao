import database, { DataTypes } from "../config/db";
import Atrativo from "./AtrativoModel";
import User from "./UserModel";

const Favorite = database.define('Favorite',
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' }
    },

    AtrativoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'atrativos', key: 'id' }
    }
  }
);

Favorite.hasMany(User, { foreignKey: 'UserId' });
Favorite.hasMany(Atrativo, { foreignKey: 'AtrativoId' });

export default Favorite;
