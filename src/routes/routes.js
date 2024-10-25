// rotas de view
import connection from '../database/connectionDB.js';

// rotas de api
const viewRoutes = (app) => {
    app.get('/', (req, res) => {
        const query = 'SELECT * FROM tarefa';
        connection.query(query, (err, results) => {
            if (err) {
                res.status(500).json({
                    error: 'error cannot get users',
                });
            } else {
                res.render('pages/index', {
                    tasks: results,
                });
            }
        });
    });

    app.get('/editar-tarefa/:id', (req, res) => {
        const id = req.params.id;
        const query = 'SELECT * FROM tarefa WHERE tarefa_id = ?';
        connection.query(query, [id], (err, results) => {
            if (err) {
                res.status(500).json({
                    error: 'error cannot get users',
                });
            } else {
                res.render('pages/editar', {
                    task: results[0],
                });
            }
        });
    });
};

export default viewRoutes;
