var app = require('http').createServer()
var io = module.exports.io =require('socket.io')(app)

// the port number in the env file will be used other wise it will be PORT 80
// the port number would then be stored into the const variable 'PORT'
const PORT = process.env.PORT || 80

const SocketManager = require('./SocketManager')

io.on('connection', SocketManager) //once connection is made, SocketManager file will be called

//when the connection is made the terminal will print the following
app.listen(PORT, () =>{
    console.log("Connected to port: " + PORT);
})
