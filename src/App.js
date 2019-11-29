import React from 'react';
import Usurvey from './Usurvey';
import './App.css';
import Auth from './Authenticate/Auth';
var firebase = require('firebase');



var firebaseConfig = {
  apiKey: "AIzaSyD4PrC0HG6QKbdllRNV2Uc1RrEOFydNb6s",
  authDomain: "usurvey-92150.firebaseapp.com",
  databaseURL: "https://usurvey-92150.firebaseio.com",
  projectId: "usurvey-92150",
  storageBucket: "usurvey-92150.appspot.com",
  messagingSenderId: "504779010545",
  appId: "1:504779010545:web:e5d2e346b3ac3ea5439450",
  measurementId: "G-2EBPW2PJWW"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Usurvey/>
      
      </header>
    </div>
  );
}

export default App;
