module.exports = function(app){

    app.get("/", function(req, res){
        res.render("index", { data: process.env.SECRET_TEXT })
    })
    
}