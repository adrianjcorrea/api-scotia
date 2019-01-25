import React, {Component} from 'react';
import './register.css';
//since this component has a state therefore making it a smart component.
class Register extends Component{
//addind the constructor and super functions.
//Plus we will be using props so might aswell pass them in to our functions.
constructor(props){
  super(props);
//will have a state of empty strings in our Register form for our input fields.
//Email, FirstName, LastName and Password.
   this.state = {
      email: "",
      firstname: "",
      lastname: "",
      password: ""
   }
 }


 //created a function to listen to email onChange event.
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
 //created a function to listen to password onChange event.
  onFirstChange = (event) => {
    this.setState({firstname: event.target.value})
  }

  //created a function to listen to email onChange event.
   onLastChange = (event) => {
     this.setState({lastname: event.target.value})
   }
  //created a function to listen to password onChange event.
   onPasswordChange = (event) => {
     this.setState({password: event.target.value})
   }

   onSubmitLogIn = () => {
     //fetch('https://mighty-refuge-81707.herokuapp.com/api/auth/user/create', {
     fetch('http://localhost:8080/register', {
       method: 'post',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
         firstname: this.state.firstname,
         lastname:this.state.lastname,
         email: this.state.email,
         password: this.state.password

       })
     })
       .then(response => response.json())
       .then(user => {
         if(user){
           this.props.loadUser(user)
         this.props.onRouteChange('login');
         console.log(user);
         }
       })
   }

//we add our render method and our return for content to be displayed on app.
render(){
  return(
    <div>
    <div className="center">
      <div className="card">
            <form>
            <h1 className="font">Register</h1>
                <input
                  className="form-item2"
                  placeholder="email goes here..."
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
                <input
                  className="form-item2"
                  placeholder="email goes here..."
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
                <input
                  className="form-item2"
                  placeholder="email goes here..."
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
                <input
                  className="form-item2"
                  placeholder="Password goes here..."
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
                <input
                 onClick={this.onSubmitLogIn}
                 className="form-submit"
                 type="submit"
                 value="register"
                  />
            </form>
        </div>
    </div>
    </div>
  );
 }
}
//adding the export so I will be able to export it to main(parent) component.
export default Register;
