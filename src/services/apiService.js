const axios = require('axios');
const { clientId, clientSecret, clinicToken, apiBaseUrl, pipedriveApiKey,tokenBotConversa, apiBotConversaBaseUrl  } = require('../config/config');



// Função para obter orçamentos do Clinica nas Nuvens
const getBudgets = async () => {
    try {
        const response = await axios.get(`${apiBaseUrl}/orcamento/lista/?dataFinal=2024-06-17&dataInicial=2024-06-17&tipoData=APROVACAO`, {
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
                'clinicaNasNuvens-cid': clinicToken
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao obter orçamentos:', error);
        throw error;
    }
};

const api = axios.create({
    baseURL: apiBotConversaBaseUrl,
    headers: {
      'accept': 'application/json',
      'API-KEY': tokenBotConversa,
      'Content-Type': 'application/json'
    }
  });


  // Função para obter dados dos inscritos (subscribers)
const getSubscribers = async () => {
    try {
      const response = await api.get('subscribers/');
      return response.data;
    } catch (error) {
      console.error('Erro ao obter dados dos inscritos do Bot Conversa:', error);
      throw error;
    }
  };








module.exports = {
    getBudgets,
    getSubscribers
    
};



