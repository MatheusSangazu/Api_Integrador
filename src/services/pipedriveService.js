const Pipedrive = require('pipedrive');
const { pipedriveApiKey } = require('../config/config');

let apiClient = new Pipedrive.ApiClient();
let api_key = apiClient.authentications['api_key'];
api_key.apiKey = pipedriveApiKey;

const dealsApi = new Pipedrive.DealsApi(apiClient);

const createDeal = async (dealData) => {
  try {
    const deal = Pipedrive.NewDeal.constructFromObject(dealData);
    const response = await dealsApi.addDeal(deal);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar negócio no Pipedrive:', error);
    throw error;
  }
};

module.exports = {
  createDeal
};
