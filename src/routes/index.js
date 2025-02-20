const express = require('express')
const router = express.Router()

const auth = require('./auth');
const bannerRoutes = require('./bannerRoutes');
const noticiasRoutes = require('./noticiasRoutes');
const inscripcionRoutes = require('./inscripcionRoutes');
const albumRoutes = require('./albumRoutes');
const enlacesRoutes = require('./enlaceRoutes');
const calendarioRoutes = require('./calendarioRoutes');
const reglamentoRoutes = require('./reglamentoRoutes');

router.use(auth)
router.use(bannerRoutes)
router.use(noticiasRoutes)
router.use(inscripcionRoutes)
router.use(albumRoutes)
router.use(enlacesRoutes)
router.use(calendarioRoutes)
router.use(reglamentoRoutes)


module.exports = router