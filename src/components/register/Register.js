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
//we add our render method and our return for content to be displayed on app.
render(){
  return(
    <div>
       <article className="Register">
         <main>
          <div>
            <fieldset >
              <legend>REGISTER </legend>
              <legend>HERE</legend>
              <div>
                <label htmlFor="email-address">Email : </label>
                <input type="email" name="email" id="email-address" />
              </div>
              <div>
                <label htmlFor="first-name">First Name : </label>
                <input type="first-name" name="first-name" id="first" />
              </div>
              <div>
                <label htmlFor="last name">Last Name : </label>
                <input type="last-name" name="last-name" id="last" />
              </div>

              <div>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" />
              </div>
              <div>
                <input type="submit" value="REGISTER" />
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
export default Register;
