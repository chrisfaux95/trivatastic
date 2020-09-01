// HELP ME
modules.exports = function(sequelize, DataTypes) {
    var Scores = sequelize.define("Scores", {
        score: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    });

    Scores.associate = function(models) {
        Scores.belongsTo(models.User, {
            foreignKey: { allowNull: false }
        });
        Scores.belongsTo(models.Categories, {
            foreignKey: { allowNull: false }
        });
    };

    return Scores;
};