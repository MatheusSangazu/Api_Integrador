// botConversaService.js
const axios = require('axios');
const { tokenBotConversa, apiBotConversaBaseUrl } = require('../config/config');


// Configurações da API do Bot Conversa
const API_BASE_URL = 'https://backend.botconversa.com.br/api/v1/webhook';
const API_KEY = 'b2e099ad-111d-4d6d-ae59-5a9d38bc024e'; // Substitua pela sua chave de API

// Configurar instância do Axios
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'accept': 'application/json',
        'API-KEY': API_KEY,
        'Content-Type': 'application/json'
    }
});

// Função para obter dados dos inscritos (subscribers)
const getSubscribers = async () => {
    try {
        const response = await api.get('/subscribers/');
        console.log('Resposta da API do Bot Conversa:', response.data); // Adicionar log para verificar a resposta
        return response.data; // Assumindo que response.data é uma lista de inscritos
    } catch (error) {
        console.error('Erro ao obter dados dos inscritos do Bot Conversa:', error);
        throw error;
    }
};

module.exports = {
    getSubscribers
};
