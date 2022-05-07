const clothingService = require('../services/clothing.service');

const findAllClothesCo = (req, res) => {
  const AllClothes = clothingService.findClothingService();
  res.send(AllClothes);
};

const byIdCo = (req, res) => {
  const idParam = req.param.id;
  const chosenClothe = clothingService.findClothingByIdService(idParam);
  res.send(chosenClothe);
};

const createClotheController = (req, res) => {
  const clothe = req.body;
  const newClothe = clothingService.createClotheService(clothe);
  res.send(newClothe);
};

const updateClotheController = (req, res) => {
  const idParam = Number (req.params.id);
  const clotheEdit = req.body;
  const updateCLothe = clothingService.updateClothesService(idParam, clotheEdit);
  res.send(updateCLothe);
};

const deleteClothingController = (req, res) => {
    const idParam = req.params.id;
    clothingService.deleteClotheService(idParam);
    res.send({ message: 'Paleta deletada com sucesso!' })
};

module.exports = {
  findAllClothesCo,
  byIdCo,
  createClotheController,
  updateClotheController,
  deleteClothingController,
};
