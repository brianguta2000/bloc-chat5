import React, { Component } from 'react';
import RoomList from './components/RoomList';
import './App.css';
import * as firebase from 'firebase';
import MessageList from './components/MessageList';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWn4jF8gxu7VBDv0OTgYxPJ4cdSB-fGr0",
    authDomain: "bloc-chat-82224.firebaseapp.com",
    databaseURL: "https://bloc-chat-82224.firebaseio.com",
    projectId: "bloc-chat-82224",
    storageBucket: "bloc-chat-82224.appspot.com",
    messagingSenderId: "631783572544"
  };
  firebase.initializeApp(config);



  class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeRoom: '',
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
  }


  setActiveRoom(room){

    this.setState({
      activeRoom: room
    });

  }


  render() {
    return (
      <div className="App">
        <h1>Bloc Chat Rooms</h1>
        <RoomList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        setActiveRoom={this.setActiveRoom}
        />
        <MessageList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        />

      </div>
    );
  }
}

export default App;
