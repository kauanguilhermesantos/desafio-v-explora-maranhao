const FavoritoController = require("../controllers/FavoritoController.js");
const routes = require("express").Router();

routes.post("/fav", (req, res) => FavoritoController.adicionaFavorito(req, res));
routes.get("/fav/:userId", (req, res) => FavoritoController.pegaListaDeFavoritosDoUserById(req, res));

module.exports = routes;

