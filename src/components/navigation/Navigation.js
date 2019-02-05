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
    <header>
          <div className="navWrapper" id="home">
            <div className=" clearfix">
              <h2 className="Greatting">Welcome To Scotia Bank</h2>
              <nav className="mainNav clearfix">
                <ul>
                  <li>
                  <a  onClick={() => onRouteChange('login')}
                    className="smoothScroll"
                    href="login">
                    logOut</a>
                    </li>
                  <li>
                  <em>
                  <h1 onClick={() => onRouteChange('AddAccount')}
                    href="AddAccount"
                    className="smoothScroll"
                    >
                    addAccount
                    </h1>
                    </em>
                    </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
  );
}else{
  return(
    <header>
  				<div className="navWrapper" id="home">
  					<div className=" clearfix">
  						<h2 className="Greatting">Welcome To Scotia Bank</h2>
  						<nav className="mainNav clearfix">
  							<ul>
  								<li>
                  <a  onClick={() => onRouteChange('login')}
                    className="smoothScroll"
                    href="login">
                    logIn</a>
                    </li>
  								<li>
                  <em>
                  <h1 onClick={() => onRouteChange('register')}
                    href="register"
                    className="smoothScroll"
                    >
                    Register
                    </h1>
                    </em>
                    </li>
  							</ul>
  						</nav>
  					</div>
  				</div>
  			</header>
  );
 }
}

export default Navigation;
