const DestinoController = require("../controllers/DestinoController.js");

const routes = require("express").Router();

routes.get("/atrativos", (req, res) => DestinoController.listarDestinos(req, res));
routes.post("/atrativos", (req, res) => DestinoController.criarDestino(req, res));
routes.put("/atrativos/:id", (req, res) => DestinoController.atualizarNomePorId(req, res));
routes.put("/atrativos/:id", (req, res) => DestinoController.atualizarDescricaoPorId(req, res));
routes.delete("/atrativos/:id", (req, res) => DestinoController.deletarDestinoById(req, res));


module.exports = routes;

