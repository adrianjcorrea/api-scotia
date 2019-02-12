import React from 'react';
import './catalogs.css';
import all from '../authentify/AuthToken.js';

//since this component has a state that will change therefore making it a smart component.
class catalogs extends React.Component{

  constructor(){
    super();
  //will have a state of empty strings in our Register catalogs form for our input fields.
  //Email, FirstName, LastName and Password.
     this.state = {
       data: []
   }
 }

 componentDidMount() {
   //fetch('https://mighty-refuge-81707.herokuapp.com/api//catalogs/cards',{
   this.getCards();
 }

       getCards(){

        fetch('https://mighty-refuge-81707.herokuapp.com/api/catalogs/cards', {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            'X-access-token': all.getToken()
              }
             })

              .then(response => response.json())
              .then(response =>{ this.setState({data: [response]})});

            }

  //          <div>
  //                  { this.state.data.map((row,i)=>
  //                    <div>
  //                     {
  //                       (typeof(row.response)=='object')?

  //                       <div>
  //                       {
  //                       row.response.map((subRow, k)=>
  //                       <div>
  //                       {
  //                         (typeof(subRow.type_cards)=='object')?
  //                         <div>
  //                         {
  //                         subRow.type_cards.forEach((subRow2, k)=>
  //                         <h1>{subRow2.type}
  //                         </h1>
  //                       )
  //                     }
  //                       </div>

  //                     :
  //                     null
  //                     }

  //                   {'_id:'+row._id}
  //                       </div>
  //          )
  //          }
  //          </div>
  //                       :
  //                       null
  //                     }
  //                     </div>
  //                 )

  //               }
  //                 </div>


  //            )
  //            }
  //            }

  // return (
  //  <h1>
  //    {JSON.stringify(_id, type_cards)}
  //   </h1>


  render(){
    const {data}= this.state
   return (
    <div>
        { data.map((row,i)=>
        <div>
          <h1>
          {'Mi ID:'+row.response._id}
          </h1>
          <h1>
          {'Type of Card:'+row.response.type_cards[0].type}
          </h1>
          <h1>
          {'Name of Card:'+row.response.type_cards[0].name}
          </h1>
          <h1>
          {'Type of Card:'+row.response.type_cards[1].type}
          </h1>
          <h1>
          {'Name of Card:'+row.response.type_cards[1].name}
          </h1>
          </div>
        )
      }
      </div>






  );
  }
  }

export default catalogs;
