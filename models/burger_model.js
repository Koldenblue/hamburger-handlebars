

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var { sequelize } = require("../config/connection.js");


// the model, Burgers, is the model for the database! This should be capitalized by convention
var Burgers = sequelize.define("burgers", {
  burger_name: Sequelize.STRING,
  burger_description: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
});

// Syncs with DB
// this will create the table if it doesn't already exist
// force : true will recreate the table every time server is restarted
Burgers.sync({ force : true });

module.exports = Burgers;
