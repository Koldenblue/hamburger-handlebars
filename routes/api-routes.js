const Burgers = require("../models/burger_model.js");


// here, the parameter app will be express()
module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    Burgers.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/burgers/new", function(req, res) {
    // req.body["burger_name"].trim();
    console.log(req.body)
    if (!(/burger/i).test(req.body["burger_name"])) {
      req.body["burger_name"] = req.body["burger_name"].trim() + " burger";
    }

    Burgers.create(req.body).then((result) => {
      console.log(req.body)
      res.status(200).end();
    });
  });

  app.put("/api/burgers/:id", (req, res) => {
    console.log(req);
    Burgers.update({
      devoured: true
    },
    { 
      where : {
        id : req.params.id
      }
    });
    res.status(200).end();
  });
}