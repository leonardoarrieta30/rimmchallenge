const express = require("express");
const router = express.Router();

const enlancesController = require("../controller/enlacesController");

router.get("/enlaces", enlancesController.getEnlace);
router.post("/enlaces/insertarEnlace", enlancesController.postOrUpdateEnlace);

module.exports = router;
