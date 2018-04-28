var express = require("express");
var socket = require("socket.io");
var qr = require("qr-image");
var btoa = require('btoa');
var fs = require("fs");

//App setup
var app = express();

/*app.get("/", function(req, res){
	var code = qr.image("this is my freaking text", {type : 'png'});

	res.type("png");
	
	code.pipe(res);
});*/


var server = app.listen(4000, function(){
	console.log("listening to requests on port 4000"); 
});


// Static files
app.use(express.static("public"));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){

	console.log('made a socket connection : '+socket.id);
	var code = qr.imageSync("this is my freaking text", {type : 'svg'},"M");

	var base64      = code.toString("base64");
	
	socket.on('join', function(data) {
		console.log(data);
		io.emit('messages', base64);
	});

	var clients = io.sockets.clients();
	console.log("test : "+clients.name);
});
