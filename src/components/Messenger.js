import React, {Component} from 'react';
import io from 'socket.io-client'

//this is the url in our own local machines
//connect to the server url
const socketURL = "http://192.168.0.5:80"
class Messenger extends Component {

    constructor(props) {
        super(props);

        this.state ={
            socket:null
        }
    }

    //React lifestyle that will start the initialization of Socket as soon as react is up and running
    componentWillMount(){
        this.initializeSocket()
    }
    //function that initializes the Socket file using our localhost url and IP address
    //once the connection is made (w/ socket and server), will output connect in console.log
    initializeSocket = () =>{
        const socket = io(socketURL)
        socket.on('connect', () => {
            console.log('Connected')
        })
        this.setState({socket})
    }
    render() {

        //takes the prop that was passed into the Messenger Component
        //in App.js
        const {title} = this.props
        return (
            <div className={'container'}>
                {title}
            </div>
        );
    }
}

export default Messenger;
