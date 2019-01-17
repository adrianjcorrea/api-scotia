import React, { Component } from 'react';
//import our styling and components.
import './css/App.css';
import Navigation from './components/navigation/Navigation.js';
import LogIn from './components/logIn/LogIn.js';
import Register from './components/register/Register.js';
import Welcome from './components/welcome/Welcome.js';

class App extends Component {
  constructor(){
     super();
     this.state = {
  //Created a route state to keep track on were im at in my app, We want it to start on our logIn page.
       route: 'login'
    }
  }
  //creating a function to be able to use my buttons to reroute. !!!testing tho!!!
  onRouteChange = () => {
    //setting state to original page component.
    //Route property is in an object it need to be wrapped in curly brackets.
    //this.set.state = ({'home'});
  }
  render() {
    return (
      <div className="App-header">
         < Navigation />
         < Welcome />
         {/*Routing with conditionals meaning
          if route equals login return login form else register form.
         {this.state.route === 'login'
         ? < LogIn onRouteChange={this.onRouteChange} />
         : < Register />
         }*/}

      </div>
    );
  }
}

export default App;
