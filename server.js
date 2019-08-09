require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exhbs = require('express-handlebars');
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

require('./controllers/apiRoutes')(app)
require('./controllers/htmlRoutes')(app)

app.listen(PORT, function(){ console.log("Running")})