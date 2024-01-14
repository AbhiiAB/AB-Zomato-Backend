var mysql = require("mysql");

require("dotenv").config();

var mySQL = process.env.MYSQL_URI;

var con = mysql.createConnection(mySQL);

con.connect(function (err) {
  if (err) {
    return console.log("Failed to connect to MySQL server/database... 🔴", err);
  } else {
    return console.log("Successfully Connected with the Database... 🟢");
  }
});

module.exports = con;
