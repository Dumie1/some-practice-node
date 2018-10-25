import React, { Component } from 'react';
import './App.css';
import Data from './Data';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Data />
        <hr />

      </div>
    );
  }
}

export default App;
