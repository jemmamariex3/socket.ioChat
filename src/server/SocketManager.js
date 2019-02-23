//importing the server index
const io = require('./index.js').io

//the connection is established in server/index.js which then sends a socket to this file
//this file individualizes what connection we have (indicated by unique socket ids from the browser)

module.exports = function(socket){
    console.log("Socket Id" + socket.id)
}

