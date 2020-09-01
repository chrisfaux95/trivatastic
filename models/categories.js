module.exports = function(sequelize, DataTypes) {
    var Categories = sequelize.define("Category", {name: DataTypes.STRING});

    Categories.associate = function(models) {
        Categories.hasMany(models.Score);
    }

    return Categories;
}