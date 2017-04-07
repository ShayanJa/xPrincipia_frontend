import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import './assets/App.css';
import './assets/index.css';
import Header from './components/Header.jsx';
import FullProblem from './components/FullProblem.jsx';
import SideBarProblem from './components/SideBarProblem.jsx';
import SolutionForm from './components/SolutionForm.jsx';
import SolutionContainer from './components/SolutionContainer.jsx';
import QuestionContainer from './components/QuestionContainer.jsx';
import SubProblemContainer from './components/SubProblemContainer.jsx';
import SuggestionContainer from './components/SuggestionContainer.jsx';
import SideBarProblemMenu from './components/SideBarProblemMenu.jsx';



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
