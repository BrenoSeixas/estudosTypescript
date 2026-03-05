import express from 'express';

const app = express();
const porta = 3000;

app.get('/', (req, res) => {
  res.json({ mensagem: "Finalmente! Minha API está viva!" });
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});