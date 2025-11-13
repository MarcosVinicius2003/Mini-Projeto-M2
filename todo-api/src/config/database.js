const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_NAME, // Para SQLite, é um arquivo local
  logging: false, // Desabilita logs do SQL no console
});

module.exports = sequelize;