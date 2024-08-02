import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userController = new UserController();

const router = Router();

router.get('/users', (req, res) => userController.pegaTodos(req, res));
router.get('/users/:id', (req, res) => userController.pegaUmPorId(req, res));
router.post('/users', (req, res) => userController.criaNovo(req, res));
router.put('/users/:id', (req, res) => userController.atualiza(req, res));
router.delete('/users/:id', (req, res) => userController.exclui(req, res));

export default router;
