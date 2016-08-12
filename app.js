var express = require("express");
//Root app
var app = express();

//Sub-apps
var scrape = require("bike-list");
var index = require("howtoterminal");

var PORTNO = process.env.PORT || 5000;
app.listen(PORTNO);
console.log(PORTNO + ' is the magic port');

app.use("/scrape", scrape);
app.use("/", index);
