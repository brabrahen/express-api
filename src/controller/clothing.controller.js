const clothingService = require('../services/clothing.service')

const findAllClothesCo = (req, res) => {
    const AllClothes = clothingService.findClothingService();
    res.send(AllClothes)
};

const byIdCo = (req, res) => {
    const idParam = req.param.id;
    const chosenClothe = clothingService.findClothingByIdService();
    res.send(chosenClothe);
}

module.exports = {
    findAllClothesCo,
    byIdCo
}