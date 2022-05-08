const clothesService = require('../services/clothing.service');

const findAllClothesCo = (req, res) => {
  const AllClothes = clothesService.findClotheSe();
  res.send(AllClothes);
};

const findByIdCo = (req, res) => {
  const idParam = Number(req.param.id);
  const chosenClothe = clothesService.findClotheByIdSe(idParam);
  res.send(chosenClothe);
};

const createClotheCo = (req, res) => {
  const clothes = req.body;

  if (!clothes || !clothes.description || clothes.price || clothes.outfit) {
    return res.send({ message: 'envie o objeto completo' });
  }
  const newClothe = clothesService.createClotheSe(clothes);
  res.send(newClothe);
};

const updateClotheCo = (req, res) => {
  const idParam = Number(req.params.id);
  const clotheEdit = req.body;
  const updateCLothe = clothesService.updateClotheSe(idParam, clotheEdit);
  res.send(updateCLothe);
};

const deleteClotheCo = (req, res) => {
  const idParam = req.params.id;
  clothesService.deleteClotheSe(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllClothesCo,
  findByIdCo,
  createClotheCo,
  updateClotheCo,
  deleteClotheCo,
};
