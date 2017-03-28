import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import './assets/App.css';
import './assets/index.css';
import Header from './components/Header.jsx';
import Problem from './components/Problem.jsx';
import SideBar from './components/SideBar.jsx';
import CreateSolution from './components/CreateSolution.jsx';
import SolutionContainer from './components/SolutionContainer.jsx';
import QuestionContainer from './components/QuestionContainer.jsx';
import SubProblemContainer from './components/SubProblemContainer.jsx';
import SuggestionContainer from './components/SuggestionContainer.jsx';
import SideBarMenu from './components/SideBarMenu.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
