// models/Tarefa.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Database/Connection');

const Tarefa = sequelize.define('Tarefa', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Tarefa;
