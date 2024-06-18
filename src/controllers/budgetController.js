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


const fetchAndOrganizeBudgets = async (req, res) => {
  try {
    const budgetsData = await getBudgets();

    // Verifique se budgetsData é um objeto e extrai a propriedade "lista"
    const budgets = Array.isArray(budgetsData.lista) ? budgetsData.lista : [];

    if (!Array.isArray(budgets)) {
      throw new Error('Os dados de orçamentos não são um array');
    }

    // Organizar os dados dos orçamentos
    const organizedBudgets = budgets.map(budget => ({
      id: budget.id,
      nome: budget.paciente.nome,
      cpf: budget.paciente.cpfcnpj,
      contato: budget.paciente.contato,
      endereco: budget.paciente.endereco,
      status: budget.status,
      dataAprovacao: budget.dataAprovacao,
      descricao: budget.descricao,
      valorBruto: budget.valorBruto,
      valorDesconto: budget.valorDesconto,
      valorLiquido: budget.valorLiquido,
      procedimentos: budget.procedimentos,
      responsavel: budget.pessoaResponsavel,
      id: budget.pessoaResponsavel.id,
      nome: budget.pessoaResponsavel.nome,
      cpf: budget.pessoaResponsavel.cpfcnpj,
      email: budget.paciente.email
      

    }));

    res.json({
      message: 'Orçamentos obtidos e organizados com sucesso',
      budgets: organizedBudgets
    });
  } catch (error) {
    console.error('Erro ao processar orçamentos:', error);
    res.status(500).json({ message: 'Erro ao processar orçamentos', error: error.message });
  }
};






module.exports = {
  fetchBudgets,
  fetchAndOrganizeBudgets
};
