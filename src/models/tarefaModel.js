const connection = "./src/database/connectionDB.js";

//tarefas banco de dados
const db = connection();
function adicionarTarefa(titulo, descricao, data_finalizacao) {
  const newTarefa = {
    titulo: `${titulo}`,
    descricao: `${descricao}`,
    data_finalizacao: `${data_finalizacao}`,
  };
  db.push({ id: Date.now(), titulo, descricao });
}
function obterTarefas() {
  return tarefas;
}
function removerTarefa(id) {
  tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
}

function editTarefa(id, titulo, descricao, data_finalizacao) {
  const newTarefa = {
    tarefa_id: `${id}`,
    titulo: `${titulo}`,
    descricao: `${descricao}`,
    data_finalizacao: `${data_finalizacao}`,
  };

  tarefas.indexOf(id).push(newTarefa);
}
module.exports = { adicionarTarefa, obterTarefas, removerTarefa, editTarefa };
