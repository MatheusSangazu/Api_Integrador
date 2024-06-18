const express = require('express');
const router = express.Router();
const { fetchBudgets } = require('../controllers/budgetController');


// Rota para obter orçamentos
router.get('/budgets', fetchBudgets);


module.exports = router;
