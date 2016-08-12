var express = require("express");
//Root app
var app = express();
// var gallery = require('node-gallery')

//Sub-apps
var scrape = require("bike-list");
var index = require("howtoterminal");

var PORTNO = process.env.PORT || 5000;
app.listen(PORTNO);
console.log(PORTNO + ' is the magic port');

app.use("/scrape", scrape);
app.use('/photo', require('node-gallery')({
  staticFiles : process.env.GALLERY_DIR || 'photo',
  urlRoot : 'photo',
  title : 'Gallery',
  image: {height: '50%', width: '50%'}
}));
// app.use('/', express.static(process.env.STATIC_FILES || __dirname+'/public'));
app.use("/", index);
