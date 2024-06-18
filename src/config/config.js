require('dotenv').config();

module.exports = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    clinicToken: process.env.CLINIC_TOKEN,
    apiBaseUrl: process.env.API_BASE_URL
};
