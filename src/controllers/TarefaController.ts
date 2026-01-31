import { AdicionarTarefa } from "../services/TarefaService.js";

export async function AdicionarTarefaController(req: any, res: any) {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: "Dados incompletos" });
  }

  const resultado = await AdicionarTarefa(titulo);
  return res.status(201).json(resultado);
}
