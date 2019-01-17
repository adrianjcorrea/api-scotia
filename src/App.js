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
       route: 'login',
       //created a property for my nav to display either log out Or register and logIn.
       isSignedIn: false
    }
  }
  //creating a function to be able to use my buttons to reroute. !!!testing tho!!!
  onRouteChange = (route) => {
    //Route property is in an object it need to be wrapped in curly brackets.
    //If its on Login then false will display logIn and register in Nav.
    if(route === 'logIn'){
      this.setState({isSignedIn: false});
      //But if its welcome then it will display logOut on nav.
    }else if(route === 'welcome'){
      this.setState({isSignedIn: true});
    }
    //setting state to reasigned route to route given on onClick function
       this.setState({route: route});
  }

  render() {
    return (
      <div className="App-header">
         < Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
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
