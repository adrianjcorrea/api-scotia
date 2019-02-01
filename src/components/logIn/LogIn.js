import React, {Component} from 'react';
import './logIn.css';
var jwtDecode = require('jwt-decode');


//accentialy the same as Register just some minor changes.
//since this component has a state therefore making it a smart component.
class LogIn extends Component{
//addind the constructor and super functions.
//Plus we will be using props so might aswell pass them in to our functions.
constructor(props){
  super(props);
//will have a state of empty strings in our Register form for our input fields.
//For our Login we just need Email and Password.
   this.state = {
      logInEmail: "",
      logInPassword: ""
   }
 }
//created a function to listen to email onChange event.
 onEmailChange = (event) => {
   this.setState({logInEmail: event.target.value})
 }
//created a function to listen to password onChange event.
 onPasswordChange = (event) => {
   this.setState({logInPassword: event.target.value})
 }
 isTokenExpired(token) {
  try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
          return true;
      }
      else
          return false;
  }
  catch (err) {
      return false;
  }
}


loggedIn() {
  // Checks if there is a saved token and it's still valid
  return !!this.getToken && !this.isTokenExpired(this.getToken) // handwaiving here
}

 setToken(idToken) {
  // Saves user token to localStorage
  localStorage.setItem('id_token', idToken)
 }


getToken() {
     // Retrieves the user token from localStorage
     return localStorage.getItem('id_token')
 }
 getProfile() {
   // Using jwt-decode npm package to decode the token
    return jwtDecode(this.getToken());
}

 onSubmitLogIn = () => {
   fetch('http://localhost:8888/logIn',{
     method:'post',
     headers:{
       'Content-Type': 'application/json'
       //'Authorization': 'Bearer' + this.getToken()
         },
     body: JSON.stringify({
        email:this.state.logInEmail,
        password:this.state.logInPassword
     })
   })

   .then(response => response.json())
   .then(data =>{
     //Promise.resolve(data);
     if(data === 'error logging in'){
      console.log('error logging in');
     }else if(data){
      console.log(data)
      this.props.onRouteChange('welcome');
      const token = data.token;
      this.setToken(token)
      return Promise.resolve(token);
     }

   })
   const hi = this.getProfile()
   console.log(hi);
   localStorage.setItem('id', JSON.stringify(hi))
  }
//we add our render method and our return for content to be displayed on app.
render(){
  //destructured to cleaner code.
  const {onRouteChange} = this.props;
          return(
            <div className="center">
              <div className="card">
                  <h1 className="font">Login</h1>
                    <form>
                        <input
                          className="form-item"
                          placeholder="email goes here..."
                          type="email"
                          name="email-address"
                          id="email-address"
                          onChange={this.onEmailChange}
                        />
                        <input
                          className="form-item"
                          placeholder="Password goes here..."
                          type="password"
                          name="password"
                          id="password"
                          onChange={this.onPasswordChange}
                        />
                        <p
                         className="form-submit"
                         onClick={this.onSubmitLogIn}
                         type="submit"
                         value="LogIn"
                         >logIn
                         </p>

                        <input
                         onClick={() => onRouteChange('register')}
                         className="form-submit"
                         type="submit"
                         value="register"
                          />
                    </form>
                </div>
            </div>
  );
 }
}
//adding the export so I will be able to export it to main(parent) component.
export default LogIn;
