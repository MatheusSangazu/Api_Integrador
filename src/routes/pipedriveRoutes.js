const express = require('express');
const router = express.Router();
const { addDeal } = require('../controllers/pipedriveController');

// Rota para criar um novo negócio
router.post('/deals', addDeal);

module.exports = router;
