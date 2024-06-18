const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const budgetsRouter = require('./routes/budgets');

// Middleware para parsear JSON
app.use(express.json());

// Usar as rotas
app.use('/', indexRouter);
app.use('/api', budgetsRouter);  // Todas as rotas de API começarão com /api
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});