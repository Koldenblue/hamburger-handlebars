var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql2");

var app = express();

var PORT = process.env.PORT || 8080;
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//require the function from the routes files, with express() as the parameter
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync().then(() => {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});