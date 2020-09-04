const db = require("../models");
const { sequelize } = require("../models");
module.exports = (app) => {

    //API call to grab all submitted scores
    app.get("/api/scores", (req, res) => {
        // console.log("GETTING SCORES")
        db.Score.findAll({
            order: sequelize.literal('Score.score DESC'),
            include: [
                {
                    model: db.User,
                    attributes: ['username']
                },
                {
                    model: db.Category,
                    attributes: ['name']
                }
            ]
            
        }).then((dbScores) => {
            res.json(dbScores);
        });
    });

    // API CALL FOR RECENT SCORES 
    app.get("/api/recent_scores", (req, res) => {
        // console.log("GETTING SCORES")
        db.Score.findAll({
            order: sequelize.literal('Score.updatedAt DESC'),
            include: [
                {
                    model: db.User,
                    attributes: ['username']
                },
                {
                    model: db.Category,
                    attributes: ['name']
                }
            ]
            
        }).then((dbScores) => {
            res.json(dbScores);
        });
    })



    //API call to grab scores by User
    app.get("/api/scores/by_user/:username", (req, res) => {
        db.User.findOne({
            where: { username: req.params.username },
            attributes: ['id']
        }).then((user) => {
            db.Score.findAll({
                include: [
                    {
                        model: db.User,
                        attributes: ['username']
                    },
                    {
                        model: db.Category,
                        attributes: ['name']
                    }
                ],
                order: [sequelize.literal('Score.updatedAt ASC')], 
                where: { userId: user.id }
            }).then((dbScore) => res.json(dbScore));
        });
    });

    //API call to grab scores by category id
    app.get("/api/scores/by_category/:cat", (req, res) => {
        db.Score.findAll({
            include: [
                {
                    model: db.User,
                    attributes: ['username']
                },
                {
                    model: db.Category,
                    attributes: ['name']
                }
            ],
            order: sequelize.literal('Score.score DESC'),
            where: { CategoryId: req.params.cat }
        }).then((dbScore) => res.json(dbScore));
    })

    app.get("/api/get_score/:username/:cat", (req, res) => {
        db.User.findOne({
            where: { username: req.params.username },
            attributes: ['id']
        }).then((user) => {
            db.Score.findAll({
                include: [
                    {
                        model: db.User,
                        attributes: ['username']
                    },
                    {
                        model: db.Category,
                        attributes: ['name']
                    }
                ],
                where: {
                    CategoryId: req.params.cat,
                    userId: user.id
                }
            }).then((dbScore) => res.json(dbScore));
        })
    })

    //API call to push new scores
    app.post("/api/score", (req, res) => {
        // console.log("POSTING SCORES");
        db.Score.create({
            UserId: req.body.UserId,
            CategoryId: req.body.CategoryId,
            score: req.body.score
        }).then((dbScore) => res.json(dbScore));
    });


}