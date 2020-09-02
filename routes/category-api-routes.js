const db = requier("../models");
module.exports = (app) => {
    // API CALL TO GET LIST OF CATEGORIES
    app.get("/api/categories", (req, res) => {
        db.Category.findAll({}).then(dbCategories => {
            res.json(dbCategories);
        });
    });

    // API CALL TO GET CATEGORY BY ID
    app.get("/api/category_by_id/:id", (req, res) => {
        db.Category.findOne({
            where: { id: req.params.id }
        }).then((dbCategory) => {
            res.json(dbCategory);
        })
    })


    // API CALL TO GET CATEGORY BY CATEGORY NAME
    app.get("/api/category_by_name/:name", (req, res) => {
        db.Category.findOne({
            where: { name: req.params.name }
        }).then((dbCategory) => {
            res.json(dbCategory);
        })
    })
}