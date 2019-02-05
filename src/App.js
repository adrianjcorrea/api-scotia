import React, { Component } from 'react';
//import our styling and components.
import './css/App.css';
import Navigation from './components/navigation/Navigation.js';
import LogIn from './components/logIn/LogIn.js';
import Register from './components/register/Register.js';
import Welcome from './components/welcome/Welcome.js';
import AddAccount from './components/addAccount/AddAccount.js';


class App extends Component {
  constructor(){
     super();
     this.state = {
       //Created a route state to keep track on were im at in my app, We want it to start on our logIn page.
       route: 'login',
       //created a property for my nav to display either log out Or register and logIn.
       isSignedIn: false,
         user: {
           id: '',
           email:'',
           firstname:'',
           lastname:''
           //iat:'',
           //entries: 0,
           //joined: ''
           //exp:''
      }
    }
  }
  //created function for
  loadUser = (data) => {
  this.setState({user:{
    id: data.id,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email
    //iat:'',
    //entries: data.entries,
  //  joined: data.joined
    //exp:''
  }})
}


  //componentDidMount(){
  //  fetch('https://mighty-refuge-81707.herokuapp.com/api//catalogs/cards')
  //  .then(response => response.json)
  //  .then(data => console.log(data))
  //}
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
    //destructured to cleaner code.
   const {isSignedIn, route} = this.state;
    return (
      <div>
         < Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />

           				<section >
           					<div >
                    {/* !!!!Routing with conditionals!!!!
                      If routing equals welcome return Welcome component*/}
                     {/* Else if routing equals login return logIn component */}
                       {/* Else return Register component */}
                    { route === 'welcome'
                      ? < Welcome />
                      :(
                        route === 'login'
                        ? < LogIn onRouteChange={this.onRouteChange}/>
                        : route === 'register'
                        ? < Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                        : < AddAccount loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                       )
                     }
           					</div>
           				</section>
    </div>
    );
  }
}

export default App;
