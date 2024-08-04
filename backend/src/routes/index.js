// import express from "express";
// import users from "./userRoutes.js";

const express = require("express");
const atrativos = require("./atrativoRoutes.js");
const database = require("../config/db.js");

database.sync()


const routes = (app) => {
  app.route("/api").get((req, res) => res.status(200).send("APIzona funcionando :)"));
  app.use("/api", express.json(), atrativos);
}

// export default routes;
module.exports = routes;
