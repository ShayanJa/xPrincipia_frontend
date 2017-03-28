import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import App from './App';
import SideBar from './components/SideBar';
import Layout from './components/Layout.jsx';
import SolutionContainer from './components/SolutionContainer.jsx';
import Create from './components/Create.jsx';
import QuestionContainer from './components/QuestionContainer.jsx';
import SuggestionContainer from './components/SuggestionContainer.jsx';
import SubProblemContainer from './components/SubProblemContainer.jsx';
import './assets/index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' copmonent={App}>
      <IndexRoute component={Layout}></IndexRoute>
      <Route path='home' component={Layout}>
        <IndexRoute component={SideBar}></IndexRoute>
        <Route path='sidebar' component={SideBar}>
          <IndexRoute component={SolutionContainer}></IndexRoute>
          <Route path='create' component={Create} />
          <Route path='solve' component={SolutionContainer} />
          <Route path='question' component={QuestionContainer} />
          <Route path='suggest' component={SuggestionContainer} />
          <Route path='subproblems' component={SubProblemContainer} />
        </Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
