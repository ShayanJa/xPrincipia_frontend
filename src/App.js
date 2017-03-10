import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import './assets/App.css';
import './assets/Create.css';
import Header from './components/Header.jsx'
import Solution from './components/Solution.jsx'
import Problem from './components/Problem.jsx'
import Create from './components/Create.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div id ="main">
        	
        </ div>
        <Problem />
        {this.props.children}

      </div>
    );
  }
}

export default App;