const express = require('express');
const router = express.Router();

const albumsController = require('../controller/albumsController')

router.get('/albums', albumsController.getAlbums);
router.post('/albums/insertarAlbum', albumsController.createAlbum);

module.exports = router;