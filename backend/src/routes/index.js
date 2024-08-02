import express from "express";
import users from "./userRoutes.js";
import atrativos from "./atrativoRoutes.js";


const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("APIzona funcionando :)"));
  app.use(express.json(), users, atrativos);
}

export default routes;
