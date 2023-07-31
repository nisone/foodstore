const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'admin',
  password: 'password', // change to your
  database: 'playground'
});

const queryPromise = function (sql, values = []) {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { db: db, query: queryPromise };