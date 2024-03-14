// app.js
const express = require('express');
const app = express();
const tarefasRoutes = require('./Routes/TarefasRoutes');

app.use(express.json());

// Usar as rotas de tarefas
app.use('/api', tarefasRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express está rodando na porta ${PORT}`);
});
