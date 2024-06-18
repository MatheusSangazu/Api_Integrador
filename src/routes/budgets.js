const express = require('express');
const router = express.Router();
const { fetchBudgets } = require('../controllers/budgetController');
const { fetchAndOrganizeBudgets, fetchSubscribers } = require('../controllers/budgetController');


// Rota para obter orçamentos
router.get('/budgets', fetchBudgets);
router.get('/organizabudgets', fetchAndOrganizeBudgets);
router.get('/subscribers', fetchSubscribers);


module.exports = router;

