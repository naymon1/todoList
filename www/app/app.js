var express = ("express");
var bps     = ("body-parser");
var cors    = ("cors");
var mongodb = ("mongodb");


var app = express();

app.use("bps",urlencoded({extended}));
app.use("cors");


app.use("/", (express.static("index")));

app.get("/app", (req, res)=> {

	res.send("");

});

app.exports = app;
