const { createDeal, createPerson } = require('../services/pipedriveService');



// Controlador para criar Negocios
const addDeal = async (req, res) => {
  try {
    const dealData = req.body; //dados do negócio serão enviados no corpo da requisição
    const newDeal = await createDeal(dealData);
    res.json(newDeal);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar negócio no Pipedrive', error: error.message });
  }
};

// Controlador para criar pessoas
const addPerson = async (req, res) => {
    try {
      const personData = req.body; // Os dados da pessoa virão no corpo da requisição
      const createdPerson = await createPerson(personData);
      res.json({
        message: 'Pessoa criada com sucesso no Pipedrive',
        person: createdPerson
      });
    } catch (error) {
      console.error('Erro ao criar pessoa no Pipedrive:', error);
      res.status(500).json({ message: 'Erro ao criar pessoa no Pipedrive', error: error.message });
    }
  };
  


module.exports = {
  addDeal,
  addPerson,
};


