const express = require('express');
const router = express.Router();

const calendarioController = require("../controller/calendariosController")  

router.post("/calendario", calendarioController.postOrUpdateCalendario);
router.get("/calendario", calendarioController.getCalendario);


module.exports = router;