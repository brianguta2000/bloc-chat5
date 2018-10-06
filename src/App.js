import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

  
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
      user: null,
    };

    this.setActiveRoom = this.setActiveRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }


  setActiveRoom(room) {

    this.setState({
      activeRoom: room
    });

  }

  setUser(user) {
    this.setState({
      user:user
    });
  }


  formatTime(timestamp) {
    // Converts the seconds given by UNIX timestamp to milliseconds for Date object
    let date = new Date (timestamp);
    let fTime = date.toLocaleTimeString('en-US');
    return fTime;
  }

  render() {
    return (
      <div className="container-fluid h-100">
        <User
        firebase={firebase}
        setUser={this.setUser}
        user={this.state.user}
        />
        <div className="row h-100">
          <RoomList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          setActiveRoom={this.setActiveRoom}
          />
          <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          user={this.state.user}
          formatTime={this.formatTime}
          />
        </div>
      </div>
    );
  }
}

export default App;
