const Sequelize = require("sequelize");
const database = require("../config/db");

const Destino = require("./Destino")(database, Sequelize.DataTypes);
const Atrativo = require("./Atrativo")(database, Sequelize.DataTypes);


Destino.associate({ Atrativo });
Atrativo.associate({ Destino });

database.sync({ force: true }).
  then(() => {
    console.log("tabelas criadas");
  });


module.exports = {
  Destino,
  Atrativo,
  database
}
