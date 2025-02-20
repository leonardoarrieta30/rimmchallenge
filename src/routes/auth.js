const {Router} = require('express')
const router = Router()
const authController = require('../controller/authController')

router.post('/auth/authentication', authController.login)


module.exports = router