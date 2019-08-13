const db = require('../models')

module.exports = function(app){
// This handles the POST request while also using the promise function
    app.post("/api/addlisting", function(req, res){
        db.House.create(req.body)
            .then(function(dbData){
                res.redirect("/")
            })
    })

}