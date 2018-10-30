import React, { Component } from 'react';
import './App.css';
import Data from './Data';
import Header from './Header';
import Calender from './Calender'

class App extends Component {
  render() {
    return<div className='App'>
        <div>
          <Header />
          <Data />
          <Calender />
        </div>
        
    </div>
    
  }
}

export default App;
