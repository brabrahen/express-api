const express = require('express');
const router = express.Router();
const controllerClothe = require('../controller/clothing.controller')

router.get('/all', controllerClothe.findAllClothesCo);
router.get('/byid/:id', controllerClothe.findByIdCo);
router.post('/create', controllerClothe.createClotheCo);
router.put('update/:id', controllerClothe.updateClotheCo);
router.delete('delete/:id', controllerClothe.deleteClotheCo)

module.exports = router