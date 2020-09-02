// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
const { BOOLEAN } = require("sequelize");


// the model, Burgers, is the model for the database! This should be capitalized by convention
var Burgers = sequelize.define("burgers", {
  // Important!! id field will automatically be entered as auto-incrementing primary key UNLESS this is defined
  // id: { type: Sequelize.INTEGER, primaryKey: true },
  // so don't define the id!
  burger_name: Sequelize.STRING,
  devoured: BOOLEAN
});

// Syncs with DB
// this will create the table if it doesn't already exist
Burgers.sync();

// Makes the Model available for other files (will also create a table)
module.exports = Burgers;
