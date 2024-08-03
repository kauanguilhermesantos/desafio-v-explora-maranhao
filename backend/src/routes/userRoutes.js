import { Router } from "express";
import UserController from "../controllers/UserController.js";

<<<<<<< Updated upstream
const userController = new UserController();
=======
const express = require("express");
const UserController = require("../controllers/UserController");
// const UserController = require("../controllers/testeController.js");
const FavoritoController = require("../controllers/FavoritoController.js");
>>>>>>> Stashed changes

const router = Router();

<<<<<<< Updated upstream
router.get('/users', (req, res) => userController.pegaTodos(req, res));
router.get('/users/:id', (req, res) => userController.pegaUmPorId(req, res));
router.post('/users', (req, res) => userController.criaNovo(req, res));
router.put('/users/:id', (req, res) => userController.atualiza(req, res));
router.delete('/users/:id', (req, res) => userController.exclui(req, res));
=======
// routes.get("/users", (req, res) => UserController.pegaTodos(req, res));
routes.get("/users", (req, res) => UserController.listarUsers(req, res));
routes.post("/users", (req, res) => UserController.cadastrarUser(req, res));
routes.get("/users/:id", (req, res) => UserController.listarUsersById(req, res));
routes.put("/users/:id", (req, res) => UserController.atualizarUserNameById(req, res));
routes.delete("/users/:id", (req, res) => UserController.deletarUserById(req, res));
>>>>>>> Stashed changes

export default router;
