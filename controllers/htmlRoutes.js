const db = require('../models');

module.exports = function (app) {
    // This handles the get request
    app.get("/", function (req, res) {
        db.House.findAll({
            raw: true,
            limit: 3,
            where: {
                isAvailable: 1
            }
        }).then(function (data) {
            console.log(data)
            res.render("home", {
                house: data
            })
        })
    })
    app.get("/add", function (req, res) {
        db.Listing.findAll({})
            .then(function (data) {
                res.render("add", data)
            })
    })
    app.get("/listing", function (req, res) {
        db.House.findAll({
                raw: true
            })
            .then(function (data) {
                res.render("listing", {
                    house: data
                })
            })
    })
    app.get("/about", function (req, res) {

        res.render("about")

    })

}