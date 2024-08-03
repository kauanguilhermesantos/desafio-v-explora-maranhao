import { Router } from "express";
import UserController from "../controllers/UserController.js";

const express = require("express");
const UserController = require("../controllers/UserController");
// const UserController = require("../controllers/testeController.js");
const FavoritoController = require("../controllers/FavoritoController.js");

const router = Router();

// routes.get("/users", (req, res) => UserController.pegaTodos(req, res));
routes.get("/users", (req, res) => UserController.listarUsers(req, res));
routes.post("/users", (req, res) => UserController.cadastrarUser(req, res));
routes.get("/users/:id", (req, res) => UserController.listarUsersById(req, res));
routes.put("/users/:id", (req, res) => UserController.atualizarUserNameById(req, res));
routes.delete("/users/:id", (req, res) => UserController.deletarUserById(req, res));

export default router;
