const express = require('express');
const playlistController = require('../controllers/listagemPlaylist');
const router = express.Router();

router.get('/playlist', playlistController.listagemPlaylist);
router.post('/playlist', playlistController.inserirItem);

module.exports = router;