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
import FullSolution from './components/FullSolution.jsx';
import WelcomeBox from './components/Welcome.jsx';
import LoginContainer from './components/LoginContainer.jsx';
import Info from './components/Info.jsx';
import LoginUnit from './components/LoginUnit.jsx';
import RegisterUnit from './components/RegisterUnit.jsx';
import ProfileContainer from './components/ProfileContainer.jsx'
import './assets/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <Route path='/welcome' component={WelcomeBox}></Route>
    <Route path='/profile' component={ProfileContainer}></Route>
    <Route path='/logincontainer' component={LoginContainer}>
      <IndexRoute component={LoginContainer}></IndexRoute>
      <Route path='/login' component={LoginUnit}></Route>
      <Route path='/register' component={RegisterUnit}></Route>
    </Route>
      <IndexRoute component={Layout}></IndexRoute>
      <Route path='/home' component={Layout}>
        <IndexRoute component={FullProblem}></IndexRoute>
        <Route path='/problem' component={FullProblem}>
          <IndexRoute component={SideBar}></IndexRoute>
          <Route path='/problem/sidebar' component={SideBar}>
            <IndexRoute component={SolutionContainer}></IndexRoute>
            <Route path='/problem/solutions' component={SolutionContainer}></Route>
            <Route path='/problem/suggestions' component={SuggestionContainer}></Route>
            <Route path='/problem/questions' component={QuestionContainer}></Route>
            <Route path='/problem/subproblems' component={SubProblemContainer}></Route>
            <Route path='/problem/createsolution' component={CreateSolution}></Route>
            <Route path='/problem/createproblem' component={CreateProblem}></Route>
          </Route>
        </Route>
        <IndexRoute component={FullSolution}></IndexRoute>
        <Route path='/fullsolution' component={FullSolution}>
          <IndexRoute component={SideBar}></IndexRoute>
          <Route path='/fullsolution/sidebar' component={SideBar}>
            <IndexRoute component={SolutionContainer}></IndexRoute>
            <Route path='/fullsolution/solutions' component={SolutionContainer}></Route>
            <Route path='/fullsolution/suggestions' component={SuggestionContainer}></Route>
            <Route path='/fullsolution/questions' component={QuestionContainer}></Route>
            <Route path='/fullsolution/subproblems' component={SubProblemContainer}></Route>
            <Route path='/fullsolution/createsolution' component={CreateSolution}></Route>
            <Route path='/fullsolution/createproblem' component={CreateProblem}></Route>
          </Route>
        </Route>
        <IndexRoute component={CreatedSolution}></IndexRoute>
        <Route path='/usersolution' component={CreatedSolution}>
          <IndexRoute component={SideBar}></IndexRoute>
          <Route path='/usersolution/sidebar' component={SideBar}>
            <IndexRoute component={SolutionContainer}></IndexRoute>
            <Route path='/usersolution/solutions' component={SolutionContainer}></Route>
            <Route path='/usersolution/suggestions' component={SuggestionContainer}></Route>
            <Route path='/usersolution/questions' component={QuestionContainer}></Route>
            <Route path='/usersolution/subproblems' component={SubProblemContainer}></Route>
            <Route path='/usersolution/createsolution' component={CreateSolution}></Route>
            <Route path='/usersolution/createproblem' component={CreateProblem}></Route>
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
