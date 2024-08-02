import database, { DataTypes } from "../config/db.js";
import Atrativo from "./AtrativoModel.js";
import User from "./UserModel.js";

const Favorito = database.define('Favorite',
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

Favorito.hasMany(User, { foreignKey: 'UserId' });
Favorito.hasMany(Atrativo, { foreignKey: 'AtrativoId' });

export default Favorito;
