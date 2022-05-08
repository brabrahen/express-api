const mongoose = require('mongoose');

const ClotheSchema = new mongoose.Schema({
  outfit: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  price: { type: Number, required: true },
});

const Clothes = mongoose.model('clothes', ClotheSchema);


module.exports = Clothes;