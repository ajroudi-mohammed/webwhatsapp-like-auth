// Make connection
var socket = io.connect("http://localhost:4000");

socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
});
socket.on('messages', function(data) {
    alert(data);
});