const Tarefa = require('../models/Tarefa');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;

    // Validações manuais
    if (!titulo || titulo.trim() === '') {
      return res.status(400).json({ error: 'Título é obrigatório e não pode ser vazio.' });
    }
    const statusPermitidos = ['a fazer', 'em andamento', 'concluída'];
    if (status && !statusPermitidos.includes(status)) {
      return res.status(400).json({ error: 'Status deve ser um dos valores: a fazer, em andamento, concluída.' });
    }

    const tarefa = await Tarefa.create({ titulo, descricao, status });
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas.' });
  }
};

// Buscar tarefa por ID
exports.buscarTarefaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefa.' });
  }
};

// Atualizar tarefa completa (PUT)
exports.atualizarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, status } = req.body;

    // Validações
    if (!titulo || titulo.trim() === '') {
      return res.status(400).json({ error: 'Título é obrigatório.' });
    }
    const statusPermitidos = ['a fazer', 'em andamento', 'concluída'];
    if (status && !statusPermitidos.includes(status)) {
      return res.status(400).json({ error: 'Status inválido.' });
    }

    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    await tarefa.update({ titulo, descricao, status });
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
  }
};

// Atualizar apenas o status (PATCH)
exports.atualizarStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const statusPermitidos = ['a fazer', 'em andamento', 'concluída'];
    if (!status || !statusPermitidos.includes(status)) {
      return res.status(400).json({ error: 'Status inválido.' });
    }

    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    await tarefa.update({ status });
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar status.' });
  }
};

// Deletar tarefa
exports.deletarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    await tarefa.destroy();
    res.status(200).json({ message: 'Tarefa deletada com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tarefa.' });
  }
};