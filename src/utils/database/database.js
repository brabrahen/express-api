const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.DATABASE_URI;



function ConnectDB() {
  mongoose
  .connect(uri)
    .then(() => {
      console.log('MongoDB conectado!');
    })
    .catch((err) => {
      return console.log(`Deu ruim meu bom ${err}`);
    });
}

// function  {
//   mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(()=> {
//       console.log("MongoDB conectado!")
//   })
//   .catch((err) => {
//       return console.log(`Deu ruim meu bom ${err}`)
//   })
// }

module.exports = ConnectDB;
