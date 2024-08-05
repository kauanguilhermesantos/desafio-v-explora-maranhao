const express = require("express");
const routes = require("./routes/index.js");
const bodyParser = require("body-parser");

const database = require("./config/db.js");


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// testando conexao
try {
  database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


routes(app);

module.exports = app;

