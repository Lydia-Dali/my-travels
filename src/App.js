import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel
          destination="Bangkok"
          country="Thailande"
          photo="https://media.routard.com/image/15/3/fotolia-98443741-m.1461153.w740.jpg"
          distance="9 365 km"
        />
        <Travel
          destination="Lima"
          country="Pérou"
          photo="https://www.espacepro-aireuropa.fr/wp-content/uploads/2017/01/lima-Copier-1.jpg"
          distance="10 314 km"
        />
        
      </div>
    );
  }
}

export default App;
       