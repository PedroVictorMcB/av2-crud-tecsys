import mysql from 'mysql2';

const host = process.env.HOST;
const pass = process.env.PASS;
const user = process.env.USER;
const database = process.env.DATABASE;

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: pass,
    database: database,
});

// A simple SELECT query
connection.query(
    'SELECT * FROM `tarefa` WHERE `tarefa_id` = 1',
    function (err, results) {
        console.log(results);
    },
);

export default connection;
