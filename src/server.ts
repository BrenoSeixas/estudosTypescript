import express from "express";
import { AdicionarTarefaController } from "./controllers/TarefaController.js";

const app = express();
app.use(express.json()); // Necessário para ler o req.body

// Criando a rota POST para adicionar tarefas
app.post("/tarefas", AdicionarTarefaController);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
