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
  onRouteChange = (route) => {
    //setting state to reasigned route
    //Route property is in an object it need to be wrapped in curly brackets.
    this.setState({route: route});
  }
  render() {
    return (
      <div className="App-header">
         < Navigation onRouteChange={this.onRouteChange} />
         {/* !!!!Routing with conditionals!!!!
           If routing equals welcome return Welcome component*/}
          {/* Else if routing equals login return logIn component */}
            {/* Else return Register component */}
         { this.state.route === 'welcome'
           ? < Welcome />
           :(
             this.state.route === 'login'
             ? < LogIn onRouteChange={this.onRouteChange}/>
             : < Register onRouteChange={this.onRouteChange} />
            )
          }
       </div>
    );
  }
}

export default App;
