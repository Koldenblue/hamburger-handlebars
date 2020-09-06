const Burgers = require("../models/burger_model.js");

module.exports = function(app) {

  // should be last route
  app.get("/", function(req, res) {
    Burgers.findAll({}).then(function(result) {
      console.log("HI")
      console.log(result);
      const nullBurger = [
        {
          burger_name: "Your burgers here!",
          devoured: false
        },
        {
          burger_name: "Devoured burgers here!",
          devoured: true
        }
      ]
      result === [] ? result = nullBurger : null;

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
        burgArray : undevouredArray,
        devouredBurgArray : devouredArray
      });
    }).then()
  });
}