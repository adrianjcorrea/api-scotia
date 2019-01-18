import React, {Component} from 'react';
import './logIn.css';
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
   fetch('http://localhost:8080/logIn',{
     method:'post',
     headers:{'Content-Type': 'application/json'},
     body: JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
     })
   })

   .then(response => response.json)
   .then(data =>{
     if(data === 'success'){
       //console.log(this.state);
       this.props.onRouteChange('welcome');
     }
   })
  }
//we add our render method and our return for content to be displayed on app.
render(){
  //destructured to cleaner code.
  const {onRouteChange} = this.props;
  return(
    <div className="A1">
       <article >
         <main>
           <div>
            <fieldset className="Log">
              <legend>Log In</legend>
              <div>
                <label htmlFor="email-address">Email : </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password : </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <div>
                <input
                 className="B1"
                 onClick={this.onSubmitLogIn}
                 type="submit"
                 value="LogIn" />
              </div>
              <div>
                <input
                 onClick={() => onRouteChange('register')}
                 className="B2"
                 type="submit"
                 value="register" />
              </div>
            </fieldset>
           </div>
         </main>
       </article>
    </div>
  );
 }
}
//adding the export so I will be able to export it to main(parent) component.
export default LogIn;
