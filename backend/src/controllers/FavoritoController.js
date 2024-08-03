const Favorito = require("../models/Favorito.js");
const Atrativo = require("../models/Atrativo.js");
const squelize = require("sequelize");

Favorito.afterSync('Atrativo');

class FavoritoController {

  static async pegaListaDeFavoritosDoUserById(req, res) {
    const UserId = req.params.userId;
    const listaFavoritos = await Favorito.findAll({ where: { UserId: UserId } });
    res.status(200).json(listaFavoritos);
  }

  static async adicionaFavorito(req, res) {
    const UserId = req.body.UserId;
    const AtrativoId = req.body.AtrativoId;
    await Favorito.create({ UserId, AtrativoId });
    res.status(200).json({ message: "favoritado" });
  }
  // colocar dps para aparecer na rota de usuario
  // "users/id/favorites"
}

module.exports = FavoritoController;
