const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

// Definir rotas conforme requisitos
router.post('/', tarefasController.criarTarefa);
router.get('/', tarefasController.listarTarefas);
router.get('/:id', tarefasController.buscarTarefaPorId);
router.put('/:id', tarefasController.atualizarTarefa);
router.patch('/:id/status', tarefasController.atualizarStatus);
router.delete('/:id', tarefasController.deletarTarefa);

module.exports = router;