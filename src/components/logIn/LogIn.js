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
      logInPassword: "",
      response: [],
      response1:"",
      userId: "",
       type_cards:{
      type: "",
      name: ""
    }
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
       'Content-Type': 'application/json',
       'x-access-token': 'Bearer' + all.getToken()
         },
     body: JSON.stringify({
        email:this.state.logInEmail,
        password:this.state.logInPassword
     })
   })

   .then(response => response.json())
   .then(data =>{ this.setState({response1: data})
     //Promise.resolve(data);
     if(this.state.response1.success || this.state.response1.error){
      alert('error logging in');
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

     //created a function to listen to Id change.
     onSetIdChange = (event) => {
       this.setState({userId: event.target.value})
     }
     //created a function to listen to card type change.
      onTypeCardChange = (event) => {
        this.setState({type: event.target.value})
      }

      //created a function to listen to card name Change event.
       onTypeCardNameChange = (event) => {
         this.setState({name: event.target.value})
       }

      // componentDidMount() {
      //   //fetch('https://mighty-refuge-81707.herokuapp.com/api//catalogs/cards',{
      //   this.getResponse();
      // }
         //onSubmitAccount = () => {
        onSubmitAccount =() => {
           fetch('https://mighty-refuge-81707.herokuapp.com/api/accounts', {
             method: 'post',
              headers: {
                'Content-Type': 'application/json',
                'X-access-token': all.getToken()
                      },
              body: JSON.stringify({
                userId: all.getId(),
                type: this.state.type,
                name: this.state.name

              })
            })
            .then(response => response.json())
            .then(type_cards => { this.setState({response: type_cards})
              if( this.state.response.success){
                this.loadAccount(type_cards)
                this.props.onRouteChange('catalogs');
                console.log(type_cards)
              }else{
                alert('not a valid user');
                this.props.onRouteChange('register');

              }
            })
          }





        loadAccount = (data) => {
        this.setState({
          userId: all.getId(),
          type_cards:[
            {
           type: data.type,
           name: data.name
        }
        ]
      })
  }

//we add our render method and our return for content to be displayed on app.
render(){
  //destructured to cleaner code.
  const {onRouteChange} = this.props;
          return(
            <div>
            <h2>Register LogIn or Just add a Card to Your Account</h2>
            <div className="center">
              <div className="card">
                  <h1 className="font">Login</h1>
                    <form>
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
                          <h1 className="font">Add Card</h1>
                          <input
                          className="form-item2"
                          placeholder="type of card ..."
                          type="email"
                          name="type card"
                          onChange={this.onTypeCardChange}
                          />
                          <input
                          className="form-item2"
                          placeholder="name of card..."
                          type=""
                          name="card name"
                          onChange={this.onTypeCardNameChange}
                          />
                         <input
                           className="form-item2"
                           placeholder="ID..."
                           type=""
                           name="id"
                           onChange={this.onSetIdChange}
                         />
                          <p
                            onClick={this.onSubmitAccount}
                            className="form-submit"
                            type="submit"
                            value="register"
                             >welcome
                             </p>


                    </form>

                </div>
            </div>
            </div>
  );
 }
}
//adding the export so I will be able to export it to main(parent) component.
export default LogIn;
