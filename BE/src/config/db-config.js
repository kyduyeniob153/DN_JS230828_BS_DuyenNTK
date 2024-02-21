const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "manageBook",
  keepAliveInitialDelay: 100000,
  enableKeepAlive: true,
});

module.exports = connection;
