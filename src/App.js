import React, { Component } from 'react';
//import our styling and components.
import './css/App.css';
import Navigation from './components/navigation/Navigation.js';
import LogIn from './components/logIn/LogIn.js';
import Register from './components/register/Register.js';

class App extends Component {
  constructor(){
     super();
     this.state = {
  //Created a route state to keep track on were im at in my app, We want it to start on our logIn page.
       route: 'login'
    }
  }
  render() {
    return (
      <div className="App-header">
         < Navigation />
         {/*Routing with conditionals meaning
          if route equals login return login form else register form.*/}
         {this.state.route === 'login'
         ? < LogIn />
         : < Register />
         }

      </div>
    );
  }
}

export default App;
