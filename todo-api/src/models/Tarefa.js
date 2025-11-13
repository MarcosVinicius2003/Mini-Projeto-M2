const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tarefa = sequelize.define('Tarefa', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Validação básica: não pode ser vazio
    },
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('a fazer', 'em andamento', 'concluída'),
    allowNull: false,
    defaultValue: 'a fazer',
    validate: {
      isIn: [['a fazer', 'em andamento', 'concluída']], // Validação: apenas valores permitidos
    },
  },
}, {
  tableName: 'tarefas',
  timestamps: true, // Adiciona createdAt e updatedAt automaticamente
});

module.exports = Tarefa;