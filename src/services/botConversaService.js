const axios = require('axios');
const { tokenBotConversa, apiBotConversaBaseUrl } = require('../config/config');

const api = axios.create({
  baseURL: apiBotConversaBaseUrl,
  headers: {
    'accept': 'application/json',
    'API-KEY': tokenBotConversa,
    'Content-Type': 'application/json'
  }
});

// Função para obter dados dos inscritos (subscribers) com paginação
const getSubscribers = async (page = 1) => {
  try {
    const response = await api.get(`subscribers/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados dos inscritos do Bot Conversa:', error);
    throw error;
  }
};

module.exports = {
  getSubscribers
};
