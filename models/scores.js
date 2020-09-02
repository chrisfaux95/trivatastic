// HELP ME
module.exports = function(sequelize, DataTypes) {
    var Score = sequelize.define("Score", {
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Score.associate = function(models) {
        Score.belongsTo(models.User, {
            foreignKey: { allowNull: false }
        });
        Score.belongsTo(models.Category, {
            foreignKey: { allowNull: false }
        });
    };

    return Score;
};