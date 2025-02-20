const express = require('express')
const router = express.Router()
const noticiasController = require('../controller/noticiasController')


router.get('/noticias', noticiasController.getAllNoticias)

router.post('/noticias', noticiasController.postNoticias)

module.exports = router 