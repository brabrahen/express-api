const express = require('express');
const router = express.Router();
const controllerClothing = require('../controller/clothing.controller')

router.get('/all', controllerClothing.findAllClothesCo);
router.get('/clothes/:id', controllerClothing.byIdCo);
router.post('/crate', controllerClothing.createClotheController);
router.put('update/:id', controllerClothing.updateClotheController);
router.delete('delete/:id', controllerClothing.deleteClothingController)

module.exports = router