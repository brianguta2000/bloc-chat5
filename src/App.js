import React, { Component } from 'react';
import RoomList from './components/RoomList';
import './App.css';
import * as firebase from 'firebase';



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
    render() {
      return (
        <div className="App">
          <RoomList firebase={firebase} />
        </div>
      );
    }
  }

  export default App;
