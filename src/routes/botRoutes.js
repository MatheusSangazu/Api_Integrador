const express = require('express');
const router = express.Router();
const { fetchSubscribers } = require('../controllers/botController');

// Rota para obter dados dos inscritos
//router.get('/subscribers', fetchSubscribers);

module.exports = router;
