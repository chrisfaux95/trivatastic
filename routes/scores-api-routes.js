const db = require("../models");
module.exports = (app) => {
    app.get("/api/scores", (req, res) => {
        console.log("GETTING SCORES")
        db.Score.findAll({
            include: [db.User, db.Category]
        }).then((dbScores) => {
            res.json(dbScores);
        })
    })
}