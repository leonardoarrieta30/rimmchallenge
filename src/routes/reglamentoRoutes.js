const express = require('express');
const router = express.Router()
const reglamentoController = require('../controller/reglamentosController');

router.get('/reglamento', reglamentoController.getReglamento);
router.post('/reglamento', reglamentoController.createOrUpdateReglamento);

module.exports = router;