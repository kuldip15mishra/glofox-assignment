import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchContainer from './container/search.container';
import RandomContainer  from './container/random.container';
class App extends Component {
  render() {
    return (
      <div className="App">
       <RandomContainer/>
       <SearchContainer/>
      </div>
    );
  }
}

export default App;
