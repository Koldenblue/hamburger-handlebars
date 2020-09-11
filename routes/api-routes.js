const Burgers = require("../models/burger_model.js");


// here, the parameter app will be express()
module.exports = function(app) {

  app.delete("/api/burgers/delete/:id", (req, res) => {
    console.log(req.params)
    Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then((results) => {
      res.status(200).end();
    })
  });

  app.get("/api/burgers", function(req, res) {
    Burgers.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/burgers/new", function(req, res) {
    // req.body["burger_name"].trim();
    if (!(/burger/i).test(req.body["burger_name"])) {
      req.body["burger_name"] = req.body["burger_name"].trim() + " burger";
    }

    Burgers.create(req.body).then((result) => {
      res.status(200).end();
    });
  });

  app.put("/api/burgers/:id", (req, res) => {
    Burgers.update({
      devoured: true
    },
    { 
      where : {
        id : req.params.id
      }
    }).then((results) => {
      res.status(200).end();
    })
  });


}