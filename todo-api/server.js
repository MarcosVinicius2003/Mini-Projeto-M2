require('dotenv').config();
const router = require('./src/routes/tarefasRoutes.js');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
app.use(router)
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});