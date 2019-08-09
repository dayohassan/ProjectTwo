const db = require('../models');

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Listing.findAll({})
            .then(function (data) {
                res.render("index", data)
            })
    })

}