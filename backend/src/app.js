import express from "express";
import routes from "./routes/index.js";
import sequelize from "./config/db.js";

const app = express();

// testando conexao
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


routes(app);

export default app;


