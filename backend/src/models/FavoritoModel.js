import database, { DataTypes } from "../config/db";
import Atrativo from "./AtrativoModel";
import User from "./UserModel";

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
