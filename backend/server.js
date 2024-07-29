import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`api escutando na porta http://localhost:${PORT} ...`);
});
