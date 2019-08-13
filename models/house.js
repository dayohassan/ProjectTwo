//This returns the house search info?

module.exports = function (sequelize, DataTypes) {
    var house = sequelize.define("House", {
        address: {
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
        beds: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        baths: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
    return house;
}