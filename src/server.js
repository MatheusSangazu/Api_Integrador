// server.js
const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const budgetsRouter = require('./routes/budgets');
const botRouter = require('./routes/botRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Middleware para CORS
const cors = require('cors');
app.use(cors());

// Middleware para log de solicitações
const morgan = require('morgan');
app.use(morgan('dev'));

// Usar as rotas
app.use('/', indexRouter);
app.use('/api', budgetsRouter);  // Todas as rotas de API começarão com /api
app.use('/bot', botRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
