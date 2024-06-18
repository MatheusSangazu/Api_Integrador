const axios = require('axios');
const { clientId, clientSecret, clinicToken, apiBaseUrl, pipedriveApiKey } = require('../config/config');



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
















module.exports = {
    getBudgets,
    
};



