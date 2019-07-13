// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection
({
  // host: "localhost",
  host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  // user: "root",
  user: "m0id1w8xmuesjoay",
  // password: "root",,
  password:"z6bwvy2ihk7a0k1b",
  // database: "burger_eater_db"
  database: "qdlomrqan2vfh57b"
});

// Make connection.
connection.connect(function(err)
{
  if (err)
  {
    console.error("Error Connecting!  DETAILS: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;