import React, {Component} from 'react';

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

  );
 }
}
//adding the export so I will be able to export it to main(parent) component.
export default Register;
