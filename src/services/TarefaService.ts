import type { Tarefa } from "../models/Tarefa.js";

const tarefas: Tarefa[] = [];

export async function AdicionarTarefa(titulo: string): Promise<Tarefa> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const novo: Tarefa = {
    id: tarefas.length + 1,
    titulo: titulo,
    concluido: false,
  };
  tarefas.push(novo);
  return novo;
}
