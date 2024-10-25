import connection from '../database/connectionDB.js';

// rotas de api
const apiRoutes = (app) => {
    const db = connection;
    app.get('/tarefa', (req, res) => {
        const query = 'SELECT * FROM tarefa';
        db.query(query, (err, results) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao buscar tarefas' });
            } else {
                res.json(results);
            }
        });
    });

    // Rota POST para criar uma nova tarefa
    app.post('/tarefa', (req, res) => {
        const { titulo, descricao } = req.body;
        const query = 'INSERT INTO tarefa (titulo, descricao) VALUES (?, ?)';
        db.query(query, [titulo, descricao], (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao criar tarefa' });
            } else {
                res.status(201).json({
                    message: 'Tarefa criada com sucesso',
                    tarefa_id: result.insertId,
                });
            }
        });
    });

    // Rota PUT para atualizar uma tarefa pelo ID
    app.post('/tarefa/editar/:id', (req, res) => {
        const tarefaId = req.params.id;
        const { titulo, descricao, data_finalizacao = null } = req.body;
        const query =
            'UPDATE tarefa SET titulo = ?, descricao = ?, data_finalizacao = ? WHERE tarefa_id = ?';
        db.query(
            query,
            [titulo, descricao, data_finalizacao, tarefaId],
            (err, result) => {
                if (err) {
                    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
                } else if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Tarefa não encontrada' });
                } else {
                    res.json({
                        message: `Tarefa ${tarefaId} atualizada com sucesso`,
                    });
                }
            },
        );
        // res.redirect('/');
    });

    // Rota DELETE para remover uma tarefa pelo ID
    app.get('/tarefa/delete/:id', (req, res) => {
        const tarefaId = req.params.id;
        const query = 'DELETE FROM tarefa WHERE tarefa_id = ?';
        connection.query(query, [tarefaId], (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao deletar tarefa' });
            } else if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Tarefa não encontrada' });
            } else {
                res.json({
                    message: `Tarefa ${tarefaId} deletada com sucesso`,
                });
            }
        });
        // res.redirect('/');
    });
};

export default apiRoutes;
