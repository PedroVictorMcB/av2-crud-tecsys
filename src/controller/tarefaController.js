// criar rotas no controller

const Tarefa = require("../models/tarefaModel");
exports.exibirTarefas = (req, res) => {
  const tarefas = Tarefa.obterTarefas();
  res.render("index", { tarefas });
};
exports.adicionarTarefa = (req, res) => {
  const { titulo, descricao } = req.body;
  Tarefa.adicionarTarefa(titulo, descricao);
  res.redirect("/");
};
exports.removerTarefa = (req, res) => {
  const { id } = req.params;
  Tarefa.removerTarefa(parseInt(id));
  res.redirect("/");
};

exports.editTarefa = (req, res) => {
  const { id, titulo, descricao, data_finalizacao } = req.params;
  Tarefa.editTarefa(parseInt(id), titulo, descricao, data_finalizacao);
  res.redirect("/");
};
