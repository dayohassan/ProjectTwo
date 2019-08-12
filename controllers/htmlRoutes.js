const db = require('../models');

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Listing.findAll({})
            .then(function (data) {
                res.render("index", data)
            })
    })
    app.get("/listing", function (req, res) {
        db.House.findAll({ raw: true })
            .then(function (data) {
                res.render("listing", { house: data })
            })
    })

}