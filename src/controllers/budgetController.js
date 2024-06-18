const { getBudgets } = require('../services/apiService');

// Controlador para obter orçamentos
const fetchBudgets = async (req, res) => {
  try {
    const budgets = await getBudgets();
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter orçamentos', error: error.message });
  }
};






module.exports = {
  fetchBudgets,
  
};
