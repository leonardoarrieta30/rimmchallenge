const express = require('express');
const router = express.Router();

const bannerController = require("../controller/bannersController")

router.get("/banner", bannerController.getBanner);
router.put("/banner/insert", bannerController.postOrUpdateBanner);


module.exports = router;