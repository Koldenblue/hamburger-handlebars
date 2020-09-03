const Burgers = require("../models/burger_model.js");

module.exports = function(app) {

  // should be last route
  app.get("/", function(req, res) {
    res.render("index");
  });

}