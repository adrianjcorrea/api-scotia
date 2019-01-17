import React from 'react';
//importing navigation.css from same folder.
import './Navigation.css';

//this component will NOT have a state and there for its a dunm component.
//but still naming it with a capital letter so code looks nicer when referencing in app.js.
const Navigation = ({onRouteChange, isSignedIn }) => {
  //Tried to condition using ternary expression but failed after to many tries.
  //If im signed in it will just display logOut in nav else it will display signIn and register.
 if(isSignedIn){
  return (
   <nav>
      <a
      onClick={() => onRouteChange('login')}
      className="App-link"
      href="login">
       Sign Out
      </a>
   </nav>
  );
}else{
  return(
    <div>
   <nav>
      <a
      onClick={() => onRouteChange('login')}
      className="App-link"
      href="login">
       Sign Out
      </a>
      {/*changed register to p tag due to with a wasnt letting me go to register form*/}
       <p
       onClick={() => onRouteChange('register')}
       className="App-link"
       href="register">
        Register
       </p>
    </nav>
    </div>
  );
 }
}

export default Navigation;
