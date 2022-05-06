const express = require('express');
const router = express.Router();
const controllerClothing = require('../controller/clothing.controller')

router.get('/all', controllerClothing.findAllClothesCo);
router.get('/clothes/:id', controllerClothing.byIdCo)

module.exports = router