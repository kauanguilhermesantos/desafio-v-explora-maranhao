// import express from "express";
// import UserController from "../controllers/UserController.js";

const express = require("express");
const UserController = require("../controllers/UserController");

const routes = express.Router();

routes.get("/users", UserController.listarUsers);
routes.post("/users", UserController.cadastrarUser);
routes.get("/users/:id", UserController.listarUsersById);
routes.put("/users/:id", UserController.atualizarUserNameById);
routes.delete("/users/:id", UserController.deletarUserById);

// export default routes;
module.exports = routes;
