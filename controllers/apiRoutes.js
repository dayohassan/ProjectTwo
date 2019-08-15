const db = require('../models')

module.exports = function (app) {
    // This handles the POST request while also using the promise function
    app.post("/api/addlisting", function (req, res) {
        db.House.create(req.body)
            .then(function (dbData) {
                res.redirect("/listing")
            })
    })

    app.get("/api/deleteListings", function (req, res) {
        db.House.destroy({
            where: {
                isAvailable: 0
            }
        }, {
            truncate: true
        }).then(function (data) {
            res.redirect("/listing")
        })
    });

    app.post("/api/sellhouse", function (req, res) {
        db.House.update({
            isAvailable: 0,
            favorite: 1
        }, {
            where: {
                id: req.body.id.split("/")[0]
            }
        }).then(function (data) {
            console.log(data)
            res.redirect("/listing")
        })
    })
    app.post("/api/addfav", function (req, res) {
        db.House.update({
            favorite: 1
        }, {
            where: {
                id: req.body.id.split("/")[0]
            }
        }).then(function (data) {
            console.log(data)
            res.redirect("/listing")
        })
    })
    app.post("/api/dropfav", function (req, res) {
        db.House.update({
            favorite: 0
        }, {
            where: {
                id: req.body.id.split("/")[0]
            }
        }).then(function (data) {
            console.log(data)
            res.redirect("/listing")
        })
    })
    app.post("/api/removehouse", function (req, res) {
        db.House.destroy({
            where: {
                id: req.body.id.split("/")[0]
            }
        }).then(function (data) {
            console.log(data)
            res.redirect("/listing")
        })
    })
}