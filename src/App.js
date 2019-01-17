import React, { Component } from 'react';
//import our styling and components.
import './css/App.css';
import Navigation from './components/navigation/Navigation.js';

class App extends Component {
  constructor(){
     super();
     this.state = {
    }
  }
  render() {
    return (
      <div className="App-header">
         < Navigation />
         {/*< Register />
        < LogIn /> */}

           <article>
             <main>
              <div>
                <fieldset id="Log-In">
                  <legend>Log In</legend>
                  <div>
                    <label htmlFor="email-address">Email</label>
                    <input type="email" name="email-address" id="email-address" />
                  </div>
                </fieldset>
              </div>
             </main>
           </article>

      </div>
    );
  }
}

export default App;
