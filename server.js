var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// INSERT ROUTES HERE


db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log("App listening on PORT " + PORT);
    })
})