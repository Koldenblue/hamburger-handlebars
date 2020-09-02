// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("burgers_db", "root", "sqlpasskev", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    // the max and min number of connections
    max: 5,
    min: 0,
    // idle is the time it takes for the server to idle out
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
