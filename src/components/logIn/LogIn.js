import React, {Component} from 'react';
import './logIn.css';
import all from '../authentify/AuthToken.js';


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

 onSubmitLogIn = () => {
   fetch('https://mighty-refuge-81707.herokuapp.com/api/auth/user/authenticate',{
     method:'post',
     headers:{
       'Content-Type': 'application/json'
       //'Authorization': 'Bearer' + all.getToken()
         },
     body: JSON.stringify({
        email:this.state.logInEmail,
        password:this.state.logInPassword
     })
   })

   .then(response => response.json())
   .then(data =>{
     //Promise.resolve(data);
     if(data === {
    "error": "Contraseña incorrecta"
      }){
      console.log('error logging in');
     }else if(data){
      console.log(data)
      const token = data.token;
      all.setToken(token)
      all.setId();
      console.log(all.getToken())
      console.log(all.getProfile())
      this.props.onRouteChange('catalogs');
      return Promise.resolve(token);

     }

   })
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
