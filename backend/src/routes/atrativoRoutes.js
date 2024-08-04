const express = require("express");
const AtrativoController = require("../controllers/AtrativoController.js");

const routes = express.Router();

routes.get("/atrativos", (req, res) => AtrativoController.listarAtrativos(req, res));
routes.post("/atrativos", (req, res) => AtrativoController.criarAtrativo(req, res));
routes.get("/atrativos/:id", (req, res) => AtrativoController.listarAtrativoById(req, res));


module.exports = routes;



