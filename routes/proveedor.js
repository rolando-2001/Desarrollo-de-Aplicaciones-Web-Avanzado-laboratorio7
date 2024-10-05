const express = require('express')
const router = express.Router()

const proveedor = require('../controllers/preveedorController')

//Mostrar todos los clientes (GET)

router.get('/proveedor', proveedor.mostrar)
router.post('/proveedor', proveedor.crear)
router.post('/proveedor/editar', proveedor.editar)
router.get('/proveedor/:id', proveedor.eliminar)

module.exports = router