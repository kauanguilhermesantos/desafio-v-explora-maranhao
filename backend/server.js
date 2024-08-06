const app = require("./src/app.js");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`api escutando na porta http://localhost:${PORT} ...\n`);
});
