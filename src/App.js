import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Solution from './components/Solution.jsx'
import Problem from './components/Problem.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id ="main">
        <Problem />
        <div id = "solutions">
        <Solution />
        </ div>
        </ div>
      </div>
    );
  }
}

export default App;
