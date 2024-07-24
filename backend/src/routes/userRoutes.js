import express from "express";
import UserController from "../controllers/userController.js";


const routes = express.Router();

routes.get("/users", UserController.listarUsers);
routes.post("/users", UserController.cadastrarUser);

export default routes;
