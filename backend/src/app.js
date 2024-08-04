const express = require("express");
const routes = require("./routes/index.js");
const database = require("./config/db.js");
const db = require("./models");



const app = express();


// testando conexao
try {
  database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}



routes(app);

module.exports = app;

