const { createDeal } = require('../services/pipedriveService');

const addDeal = async (req, res) => {
  try {
    const dealData = req.body; // Supondo que os dados do negócio serão enviados no corpo da requisição
    const newDeal = await createDeal(dealData);
    res.json(newDeal);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar negócio no Pipedrive', error: error.message });
  }
};

module.exports = {
  addDeal
};
