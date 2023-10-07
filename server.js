const Port = 3000; 
// making the express server 
const express = require('express'); 
const path = require("path");
const http = require('http');
const socketio = require('socket.io');
const { Socket } = require('dgram');

const app = express();
const server = http.createServer(app)
const io =  socketio(server);

//  static connection 
app.use(express.static(path.join(__dirname, 'Public')));

//  run when client connets
io.on ('connection', Socket =>{
    console.log('new Ws connecton ');
});

 app.listen(Port,()=> console.log(`Server running on the  port ${Port}`)) 