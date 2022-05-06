const express = require('express');
const cors = require('cors')
const port = 3001;
const route = require("./src/routes/clothing.routes")
const app = express();
app.use(cors())

app.use(express.json());

app.use("/clothing", route)


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log("OK, sou incrivel!")
});
