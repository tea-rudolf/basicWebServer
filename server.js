var express = require("express");
var fs = require("fs");
var app = express();
//app.register(".html", require("jade"));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "jade");
app.get("/", function(req, res) {
    res.render("index");
});

// spin up server
app.listen(process.env.PORT || 8080);
console.log("app running on port %d", 8080);


fs.readFile("./test.json", "utf8", function(err, data){
	if(err) {
		return console.log(err);
	} 
	var json = JSON.parse(data);
	console.log(json.value);
});