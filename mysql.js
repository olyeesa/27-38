const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database',
});

connection.query('SELECT * FROM users', (error, results) => {
  if (error) {
    throw error;
  }

  console.log(results);
});

connection.end();