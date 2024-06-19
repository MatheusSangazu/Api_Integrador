const { getSubscribers } = require('../services/botConversaService');

// Função para obter todos os inscritos lidando com paginação
const fetchAllSubscribers = async () => {
  let allSubscribers = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await getSubscribers(page);
    const data = response.results || [];

    allSubscribers = allSubscribers.concat(data);

    if (response.next) {
      page++;
    } else {
      hasMore = false;
    }
  }

  return allSubscribers;
};

// Controlador para obter dados dos inscritos
const fetchSubscribers = async (req, res) => {
  try {
    const data = await fetchAllSubscribers();
    console.log('Dados retornados pela API do Bot Conversa:', JSON.stringify(data, null, 2));

    if (!Array.isArray(data)) {
      console.error('Dados retornados não são uma lista:', data);
      return res.status(500).json({ message: 'Dados retornados não são uma lista', data });
    }

    const count = data.length; // Contar o número total de inscritos
    console.log('Número total de inscritos:', count);

    return res.json({ count, subscribers: data });
    
  } catch (error) {
    console.error('Erro ao obter dados dos inscritos do Bot Conversa:', error);
    return res.status(500).json({ message: 'Erro ao obter dados dos inscritos do Bot Conversa', error: error.message });
  }
};

module.exports = {
  fetchSubscribers
};
