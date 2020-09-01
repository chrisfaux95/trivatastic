

modules.exports = (sequelize, DataTypes) => {
    const Scores = sequelize.define("Scores", {
        value: {
            type: DataTypes.NUMBER,
            allowNull: false,
        }
        

    })
}