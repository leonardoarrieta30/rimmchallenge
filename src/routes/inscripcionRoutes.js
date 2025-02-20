const express = require('express');
const router = express.Router();

const inscripcionesController = require('../controller/inscripcionesController.js')

router.post('/inscripcion/enviarInscripcion', inscripcionesController.enviarInscripcion);
router.get('/inscripcion/obtenerInscripcionByDni/:documentoIdentidad', inscripcionesController.obtenerInscripcionByDni);
router.get('/inscripcion/getInscritos', inscripcionesController.getInscritos);

module.exports = router;