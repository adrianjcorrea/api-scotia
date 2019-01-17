import React from 'react';
//importing navigation.css from same folder.
import './Navigation.css';

//this component will NOT have a state and there for its a dunm component.
//but still naming it with a capital letter so code looks nicer when referencing in app.js.
const Navigation = ({onRouteChange}) => {
  //will have one return for now especifing a nav tag with a hyperLink tag.
  return (
   <nav>
      <a
      onClick={() => onRouteChange('login')}
      className="App-link"
      href="">
       Sign Out
      </a>
   </nav>
  );
}

export default Navigation;
