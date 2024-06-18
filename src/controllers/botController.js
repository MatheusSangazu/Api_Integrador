// botController.js
const { getSubscribers } = require('../services/botConversaService');
const { parseISO, isSameMonth, isSameYear } = require('date-fns');

// Controlador para obter dados dos inscritos
const fetchSubscribers = async (req, res) => {
  try {
    const response = await getSubscribers();
    const data = response.subscribers; // Ajuste conforme necessário
    console.log('Dados retornados pela API do Bot Conversa:', JSON.stringify(data, null, 2));

    if (Array.isArray(data)) {
      const currentDate = new Date();
      const currentMonthSubscribers = data.filter(subscriber => {
        const createdAtDate = parseISO(subscriber.created_at);
        return isSameMonth(createdAtDate, currentDate) && isSameYear(createdAtDate, currentDate);
      });
      const count = currentMonthSubscribers.length; // Contar o número de inscritos no mês atual

      console.log('Número de inscritos no mês atual:', count);
      return res.json({ count, currentMonthSubscribers });
    } else {
      console.error('Dados retornados não são uma lista:', data);
      return res.status(500).json({ message: 'Dados retornados não são uma lista', data });
    }
  } catch (error) {
    console.error('Erro ao obter dados dos inscritos do Bot Conversa:', error);
    return res.status(500).json({ message: 'Erro ao obter dados dos inscritos do Bot Conversa', error: error.message });
  }
};

module.exports = {
  fetchSubscribers
};
