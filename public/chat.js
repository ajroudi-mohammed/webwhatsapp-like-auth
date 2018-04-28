// Make connection
var socket = io.connect("http://localhost:4000");

socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
});
socket.on('messages', function(data) {
 
    var para = document.createElement("p");
    para.innerHTML = data;
    para.style.cssText = 'width:200px;height:200px;';
    document.body.appendChild(eval(para));
    
});

socket.on("greeting" , function(data){
    alert(data);
});