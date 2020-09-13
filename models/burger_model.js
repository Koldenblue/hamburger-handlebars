

// the model, Burgers, is the model for the database! This should be capitalized by convention
module.exports = function(sequelize, DataTypes) {
var Burger = sequelize.define("Burger", {
  burger_name: DataTypes.STRING,
  burger_description: DataTypes.STRING,
  devoured: DataTypes.BOOLEAN

});
return Burger;

}

