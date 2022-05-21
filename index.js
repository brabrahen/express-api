const express = require('express');
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();


const connectDB = require('./src/utils/database/database');
const route = require('./src/routes/clothing.routes');

app.use(cors());
app.use(express.json());
app.use('/clothes', route);
connectDB();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  
});

