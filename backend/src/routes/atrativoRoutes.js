import { Router } from "express";
import AtrativoController from "../controllers/AtrativoController.js";

const atrativoController = new AtrativoController();

const router = Router();

router.get('/atrativos', (req, res) => atrativoController.pegaTodos(req, res));
router.get('/atrativos/:id', (req, res) => atrativoController.pegaUmPorId(req, res));
router.post('/atrativos', (req, res) => atrativoController.criaNovo(req, res));
router.put('/atrativos/:id', (req, res) => atrativoController.atualiza(req, res));
router.delete('/atrativos/:id', (req, res) => atrativoController.exclui(req, res));

module.exports = router;
