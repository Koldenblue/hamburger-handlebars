
const descriptions = require("./words.js");
const db = require("../models");

// here, the parameter app will be express()
module.exports = function(app) {

  // route to delete a given burger
  app.delete("/api/burgers/delete/:id", (req, res) => {
    console.log(req.params)
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then((results) => {
      res.status(200).end();
    })
  });

  // returns all burgers in database
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // route that posts a new burger
  app.post("/api/burgers/new", function(req, res) {
    // req.body["burger_name"].trim();
    // appends the word burger if it is not already part of the name
    if (!(/burger/i).test(req.body["burger_name"])) {
      req.body["burger_name"] = req.body["burger_name"].trim() + " burger";
    }
    randDescription = Math.floor(Math.random() * descriptions.length);
    req.body["burger_description"] = "This burger is " + descriptions[randDescription];
    db.Burger.create(req.body).then((result) => {
      res.status(200).end();
    });
  });

  // route to update the devoured state of the burger
  app.put("/api/burgers/:id", (req, res) => {
    db.Burger.update({
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