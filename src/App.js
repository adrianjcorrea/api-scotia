import React, { Component } from 'react';
//import our styling and components.
import './css/App.css';
import Navigation from './components/navigation/Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         < Navigation />
        </header>
      </div>
    );
  }
}

export default App;
