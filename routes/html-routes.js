const Burgers = require("../models/burger_model.js");

module.exports = function(app) {

  // should be last route
  app.get("/", function(req, res) {
    Burgers.findAll({}).then(function(result) {
      // console.log(result)
      let myArray = [];
      for (let elem of result) {
        let newObj = {};
        newObj["burger_name"] = elem["burger_name"]
        myArray.push(newObj)
      }
      console.log(myArray)
      res.render("index", {
        burgers : result[0]['burger_name'],
        burgArray : myArray
      });
    });
  });

}