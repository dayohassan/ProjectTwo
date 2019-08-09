module.exports = function (sequelize, DataTypes) {
    var listing = sequelize.define("Listing", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
    return listing;
}