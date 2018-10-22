import React, { Component } from 'react';
import './App.css';
import Category from './Category';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Category />
        <hr />

      </div>
    );
  }
}

export default App;
