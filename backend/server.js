import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`api escutando na porta http://localhost:${PORT} ...`);
});
