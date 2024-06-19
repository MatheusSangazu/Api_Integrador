const express = require('express');
const router = express.Router();
const { addDeal, addPerson } = require('../controllers/pipedriveController');

// Rota para criar um novo negócio
router.post('/deals', addDeal);
router.post('/person', addPerson);

module.exports = router;
