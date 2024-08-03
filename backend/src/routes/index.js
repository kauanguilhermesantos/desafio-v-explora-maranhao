<<<<<<< Updated upstream
import express from "express";
import users from "./userRoutes.js";
import atrativos from "./atrativoRoutes.js";


const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("APIzona funcionando :)"));
  app.use(express.json(), users, atrativos);
=======
// import express from "express";
// import users from "./userRoutes.js";

const express = require("express");
const users = require("./userRoutes.js");
const atrativos = require("./atrativosRoutes.js");
const favoritos = require("./favoritoRoutes.js");

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("APIzona funcionando :)"));
  app.use(express.json(), users, atrativos, favoritos);
>>>>>>> Stashed changes
}

export default routes;
