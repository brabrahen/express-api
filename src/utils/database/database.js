const mongoose = require('mongoose');

function ConnectDB() {
  mongoose.connect('mongodb://localhost:27017/ClothingStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=> {
      console.log("MONGO CONECTADO")
  })
  .catch((err) => {
      return console.log(`Deu ruim meu bom ${err}`)
  })
}

module.exports = ConnectDB;