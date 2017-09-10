var express = require('express');
var app = express();

app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./views");

app.listen(process.env.PORT || 2211, function(){
    console.log("Server connected");
});

app.get("/",function(req, res){
	res.render("index");
});

app.get("/trangchu",function(req, res){
	res.render("main");
});