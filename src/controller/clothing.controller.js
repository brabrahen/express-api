const clothesService = require('../services/clothing.service');

const findAllClothesCo = async (req, res) => {
  const AllClothes = await clothesService.findClotheSe();
  res.status(200).send(AllClothes);
};

const findByIdCo = async (req, res) => {
  const idParam = req.params.id;
  try {
    const chosenClothe = await clothesService.findClotheByIdSe(idParam);
    res.status(200).send(chosenClothe);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'Nenhuma peça foi encontrada' });
  }
};

const createClotheCo = async (req, res) => {
  const clothes = req.body;
  try {
    const newClothe = await clothesService.createClotheSe(clothes);
    res.status(201).send(newClothe);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const updateClotheCo = async (req, res) => {
  const idParam = req.params.id;
  console.log(idParam);
  const clotheEdit = req.body;
  try {
    const updatedClothe = await clothesService.updateClotheSe(
      idParam,
      clotheEdit,
    );
    res.status(200).send(updatedClothe);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
};

const deleteClotheCo = async (req, res) => {
  const idParam = req.params.id;
  try {
    await clothesService.deleteClotheSe(idParam);
    res.status(200).send({ message: 'Peça foi deletada com sucesso' })
  } catch (err) {
    res.status(400).send({ message: 'Não foi possível exclui item' })
  }
};

module.exports = {
  findAllClothesCo,
  findByIdCo,
  createClotheCo,
  updateClotheCo,
  deleteClotheCo,
};
