const Burgers = require("../models/burger_model.js");

module.exports = function(app) {

  // should be last route
  app.get("/", function(req, res) {
    Burgers.findAll({}).then(function(result) {
      // initialize empty arrays to hold burger objects
      let undevouredArray = [];
      let devouredArray = [];

      for (let i= 0; i < result.length; i++) {
        // create the burger objects from the query results
        let undevouredBurger = {};
        let devouredBurger = {};
        if (result[i]["devoured"] === false) {
          undevouredBurger["burger_name"] = result[i]["burger_name"];
          undevouredBurger["devoured"] = false;
          undevouredArray.push(undevouredBurger);
        }
        else {
          devouredBurger["burger_name"] = result[i]["burger_name"];
          devouredBurger["devoured"] = true;
          devouredArray.push(devouredBurger);
        }
      }
      res.render("index", {
        burgers : result[0]['burger_name'],
        burgArray : undevouredArray,
        devouredBurgArray : devouredArray
      });
    }).then()
  });
}