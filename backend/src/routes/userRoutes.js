import express from "express";
import UserController from "../controllers/UserController.js";

const routes = express.Router();

routes.get('/users', (req, res) => UserController.getAll(req, res))

export default routes;
