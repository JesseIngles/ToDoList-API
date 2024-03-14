// routes/tarefasRoutes.js
const express = require('express');
const router = express.Router();
const Tarefa = require('../Models/Tarefa');

// Rota para obter todas as tarefas
router.get('/tarefas', async (req, res) => {
  const tarefas = await Tarefa.findAll();
  res.json(tarefas);
});
router.post('/tarefas', async (req, res) => {
    try {
      const { titulo, descricao } = req.body;
  
      // Cria uma nova tarefa usando o modelo Tarefa do Sequelize
      const novaTarefa = await Tarefa.create({
        titulo,
        descricao,
        concluida: false // Por padrão, a tarefa é marcada como não concluída ao ser criada
      });
  
      res.status(201).json(novaTarefa); // Retorna a nova tarefa criada com sucesso
    } catch (error) {
      console.error('Erro ao cadastrar a tarefa:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  });

// Rota para criar uma nova tarefa
router.post('/tarefas', async (req, res) => {
  const { titulo, descricao } = req.body;
  const tarefa = await Tarefa.create({ titulo, descricao });
  res.status(201).json(tarefa);
});

// Outras rotas para atualizar e excluir tarefas...

module.exports = router;
