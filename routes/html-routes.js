const Burgers = require("../models/burger_model.js");
const path = require("path");


// if no burgers are already in database, display these default values instead
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


module.exports = function(app) {


  // should be last route
  app.get("/", function(req, res) {
    // first perform an sql query to get all burgers
    Burgers.findAll({}).then(function(result) {
      // console.log(result);
      // display nullBurger values if database is completely empty (this helps avoid errors as well)
      result === [] ? result = nullBurger : null;

      // initialize empty burger arrays to hold burger objects
      let undevouredArray = [];
      let devouredArray = [];

      for (let i= 0; i < result.length; i++) {
        // create the burger objects from the query results
        let undevouredBurger = {};
        let devouredBurger = {};
        // then push objects to the burger arrays. Here, result was returned as all burgers, from the sql query
        if (result[i]["devoured"] === false) {
          undevouredBurger["burger_name"] = result[i]["burger_name"];
          undevouredBurger["devoured"] = false;
          undevouredBurger["burger_description"] = result[i]["burger_description"]
          undevouredBurger["id"] = result[i]["id"];
          undevouredArray.push(undevouredBurger);
        }
        else {
          devouredBurger["burger_name"] = result[i]["burger_name"];
          devouredBurger["devoured"] = true;
          devouredBurger["burger_description"] = result[i]["burger_description"];
          devouredBurger["id"] = result[i]["id"];
          devouredArray.push(devouredBurger);
        }
      }
      // finally, use handlebars to render the arrays
      res.render("index", {
        burgArray : undevouredArray,
        devouredBurgArray : devouredArray
      });
    });
  });
}