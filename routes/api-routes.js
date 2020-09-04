const Burgers = require("../models/burger_model.js");

// here, the parameter app will be express()
module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    Burgers.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/burgers/new", function(req, res) {
    Burgers.create(req.body).then((result) => {
      res.status(200).end();
    });
  });
}