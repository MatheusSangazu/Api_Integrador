const express = require('express');
const router = express.Router();
const { fetchBudgets, fetchAndOrganizeBudgets } = require('../controllers/budgetController');

// Rota para obter orçamentos
router.get('/budgets', fetchBudgets);
router.get('/organizabudgets', fetchAndOrganizeBudgets);

module.exports = router;
