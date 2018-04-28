var express = require("express");
var socket = require("socket.io");
var qr = require("qr-image");

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
	socket.on('join', function(data) {
		console.log(data);
		io.emit('messages', 'Hello');
	});
});
