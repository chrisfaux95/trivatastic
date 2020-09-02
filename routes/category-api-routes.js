const db = requier("../models");
module.exports = (app) => {
    app.get("/api/categories", (req, res) => {
        db.Category.findAll({}).then(dbCategories => {
            res.json(dbCategories);
        })
    })
}