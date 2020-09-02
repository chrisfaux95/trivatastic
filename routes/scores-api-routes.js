const db = require("../models");
module.exports = (app) => {

    //API call to grab all submitted scores
    app.get("/api/scores", (req, res) => {
        console.log("GETTING SCORES")
        db.Score.findAll({
            include: [db.User, db.Category]
        }).then((dbScores) => {
            res.json(dbScores);
        });
    });

    //API call to grab scores by User
    app.get("/api/scores/by_user/:username", (req, res) => {
        db.Score.findAll({
            include: [db.User, db.Category],
            where: { username: req.params.username }
        }).then((dbScore) => res.json(dbScore));
    });

    app.get("/api/scores/by_category/:cat", (req, res) => {
        db.Score.findAll({
            include: [db.User],
            where: { CategoryId: req.params.cat }
        }).then((dbScore) => res.json(dbScore));
    })




    //API call to push new scores
    app.post("/api/score", (req, res) => {
        // console.log("POSTING SCORES");
        db.Score.create(req.body).then(dbScore => res.json(dbScore));

    });

}