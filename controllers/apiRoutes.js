const db = require('../models')

module.exports = function(app){

    app.post("/api/addlisting", function(req, res){
        console.log(req.body)

        db.House.create(req.body)
            .then(function(dbData){
                res.redirect("/")
            })
    })

}