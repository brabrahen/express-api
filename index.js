const express = require('express');
const cors = require('cors');
const port = 3001;
const route = require('./src/routes/clothing.routes');
const app = express();
const connectDB = require('./src/utils/database/database');

app.use(cors());
app.use(express.json());
app.use('/clothes', route);
connectDB();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log('Completinho em express papai');
});
