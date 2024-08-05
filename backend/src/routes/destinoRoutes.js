const DestinoController = require("../controllers/DestinoController.js");

const routes = require("express").Router();

routes.get("/destinos", (req, res) => DestinoController.listarDestinos(req, res));
routes.post("/destinos", (req, res) => DestinoController.criarDestino(req, res));
routes.put("/destinos/:id", (req, res) => DestinoController.atualizarNomePorId(req, res));
routes.put("/destinos/:id", (req, res) => DestinoController.atualizarDescricaoPorId(req, res));
routes.delete("/destinos/:id", (req, res) => DestinoController.deletarDestinoById(req, res));


module.exports = routes;

