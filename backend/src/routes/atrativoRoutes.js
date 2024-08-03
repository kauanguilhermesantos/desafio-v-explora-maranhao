// import { routes } from "express";
// import AtrativoController from "../controllers/AtrativoController.js";

const { Router } = require("express");
const AtrativoController = require("../controllers/AtrativoController.js")

const atrativoController = new AtrativoController();

const routes = Router();

routes.get('/atrativos', (req, res) => atrativoController.pegaTodos(req, res));
routes.get('/atrativos/:id', (req, res) => atrativoController.pegaUmPorId(req, res));
routes.post('/atrativos', (req, res) => atrativoController.criaNovo(req, res));
routes.put('/atrativos/:id', (req, res) => atrativoController.atualiza(req, res));
routes.delete('/atrativos/:id', (req, res) => atrativoController.exclui(req, res));

export default routes;
