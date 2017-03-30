import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import SideBar from './components/SideBar';
import Layout from './components/Layout.jsx';
import SolutionContainer from './components/SolutionContainer.jsx';
import CreatedSolution from './components/CreatedSolution.jsx';
import CreateProblem from './components/CreateProblem.jsx';
import CreateSolution from './components/CreateSolution.jsx';
import QuestionContainer from './components/QuestionContainer.jsx';
import SuggestionContainer from './components/SuggestionContainer.jsx';
import SubProblemContainer from './components/SubProblemContainer.jsx';
import FullProblem from './components/FullProblem.jsx';
import Login from './components/Login.jsx'
import './assets/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <Route path='/login' component={Login}></Route>
      <IndexRoute component={Layout}></IndexRoute>
      <Route path='/home' component={Layout}>
        <IndexRoute component={FullProblem}></IndexRoute>
        <Route path='/problem' component={FullProblem}>
          <IndexRoute component={SideBar}></IndexRoute>
          <Route path='/sidebar' component={SideBar}>
            <IndexRoute component={SolutionContainer}></IndexRoute>
            <Route path='/solutions' component={SolutionContainer}></Route>
            <Route path='/suggestions' component={SuggestionContainer}></Route>
            <Route path='/questions' component={QuestionContainer}></Route>
            <Route path='/subproblems' component={SubProblemContainer}></Route>
            <Route path='/createsolution' component={CreateSolution}></Route>
            <Route path='/createproblem' component={CreateProblem}></Route>
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
