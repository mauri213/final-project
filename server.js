//127.0.0.1 == 0.0.0.0 == localhost
//default port for most web servers is 80. for web traffic. web requests.
//ifconfig | grep broadcast
//static assets = html, css, js, images, video and audio

var lowdb = require('lowdb'); 
var fileAsync = require('lowdb/lib/file-async'); 
var shortid = require('shortid'); 
var bodyParser = require('body-parser'); 
var express = require('express'); 
var app = express(); var port = 3000;  
var db = lowdb('db.json', { storage: fileAsync });  

app.use(bodyParser());  
app.use(express.static(__dirname + '/public')); 
app.use(express.static(__dirname + '/dist')); 
app.use(express.static(__dirname + '/lib'));  

db.defaults({     // any default collections (Arrays) 
}).value();  

app.listen(port);	