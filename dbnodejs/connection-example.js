var mysql = require('mysql');

console.log('Get connection ...');

var connection = mysql.createConnection({
  database: 'mysql',
  host: "localhost",
  user: "mysql",
  password: "mysql"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  connection.end();
});