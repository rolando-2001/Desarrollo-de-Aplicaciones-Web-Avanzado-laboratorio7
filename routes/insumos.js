const express = require('express')
const router = express.Router()

const insumoController = require('../controllers/insumoController')

//Mostrar todos los insumos (GET)
router.get('/insumo', insumoController.all)
router.post('/insumo', insumoController.create)
router.get('/insumo/:id', insumoController.delete)
router.post('/insumo/editar', insumoController.edit)
module.exports = router

