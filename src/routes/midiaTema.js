const express = require('express');
const midiaTemaController = require('../controllers/midiaTema');
const router = express.Router();

router.post('/',midiaTemaController.addTemaMidia);  // Insere tema para determinada mídia
router.get('/',midiaTemaController.getAll);         // Listagem de mídias por temas

module.exports = router;