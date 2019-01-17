import React, { Component } from 'react';
//import our styling and components.
import './css/App.css';
import Navigation from './components/navigation/Navigation.js';
import LogIn from './components/logIn/LogIn.js';

class App extends Component {
  constructor(){
     super();
     this.state = {
    }
  }
  render() {
    return (
      <div className="App-header">
         < Navigation />
         {/*< Register />*/}
        < LogIn />
      </div>
    );
  }
}

export default App;
