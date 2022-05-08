const express = require('express');
const router = express.Router();
const controllerClothe = require('../controller/clothing.controller');
const {
  validId,
  validObjectBody,
} = require('../middleware/clothes.middleware');

router.get('/all', controllerClothe.findAllClothesCo);
router.get('/byid/:id', validId, controllerClothe.findByIdCo);
router.post('/create', validObjectBody, controllerClothe.createClotheCo);
router.put('update/:id', controllerClothe.updateClotheCo);
router.delete('delete/:id', controllerClothe.deleteClotheCo);

module.exports = router;
