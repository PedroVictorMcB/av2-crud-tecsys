import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mytask',
});

// A simple SELECT query
// connection.query(
//     'SELECT * FROM `tarefa` WHERE `tarefa_id` = 1',
//     function (err, results) {
//         console.log(results);
//     },
// );

export default connection;
