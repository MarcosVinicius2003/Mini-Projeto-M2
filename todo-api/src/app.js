const express = require('express');
const tarefasRoutes = require('./routes/tarefasRoutes');
const sequelize = require('./config/database');

const app = express();

// Middleware para parsing JSON
app.use(express.json());

// Sincronizar banco de dados (cria tabelas se não existirem)
sequelize.sync({ force: false }) // force: false para não recriar tabelas em produção
  .then(() => console.log('Banco de dados sincronizado.'))
  .catch(err => console.error('Erro ao sincronizar banco:', err));

// Definir rotas
app.use('/tarefas', tarefasRoutes);

// Middleware de erro global (opcional, para capturar erros não tratados)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

module.exports = app;