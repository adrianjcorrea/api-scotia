import React from 'react';
import '../register/register.css';
import all from '../authentify/AuthToken.js';

//since this component has a state that will change therefore making it a smart component.
class AddAccount extends React.Component{

  constructor(props){
    super(props);
  //will have a state of empty strings in our addAccount form for our input fields.
  //Id, type and card name.
     this.state = {
        userId: "",
         type_cards:{
        type: "",
        name: ""
      }
   }
 }

   componentDidMount() {
     //fetch('https://mighty-refuge-81707.herokuapp.com/api//catalogs/cards',{
     fetch('https://mighty-refuge-81707.herokuapp.com/api/accounts', {
        method:'get',
        headers:{
          'Content-Type': 'application/json',
          'X-access-token': all.getToken()
        }
      })

     .then(response => response.json())
     .then(data =>{
        console.log(data)
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

       onSubmitAccount = () => {
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
          .then(type_cards => {
            if(type_cards){
              this.loadAccount(type_cards)
              this.props.onRouteChange('catalogs');
              console.log(type_cards)

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


   render(){
  return (
    <div>
    <div className="center">
      <div className="card">
            <form>
            <h1 className="font">ADD ACCOUNT</h1>
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

export default AddAccount;
