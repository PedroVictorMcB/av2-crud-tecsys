import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import apiRoutes from './src/routes/routes.api.js';
import viewRoutes from './src/routes/routes.js';

const app = express();
// const tarefaController = require("./controllers/tarefaController");

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
apiRoutes(app);
viewRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
