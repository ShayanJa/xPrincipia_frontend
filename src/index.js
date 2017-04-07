import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import AnswerContainer from './components/AnswerContainer.jsx';
import UserSolution from './components/UserSolution.jsx';
import ProblemForm from './components/ProblemForm.jsx';
import SolutionForm from './components/SolutionForm.jsx';
import FullProblem from './components/FullProblem.jsx';
import FullSolution from './components/FullSolution.jsx';
import Info from './components/Info.jsx';
import Layout from './components/Layout.jsx';
import LoginContainer from './components/LoginContainer.jsx';
import LoginUnit from './components/LoginUnit.jsx';
import ProfileContainer from './components/ProfileContainer.jsx';
import QuestionContainer from './components/QuestionContainer.jsx';
import RegisterUnit from './components/RegisterUnit.jsx';
import SearchContainer from './components/SearchContainer.jsx';
import SideBarProblem from './components/SideBarProblem';
import SideBarFullSolution from './components/SideBarFullSolution';
import SideBarUserSolution from './components/SideBarUserSolution';
import SolutionContainer from './components/SolutionContainer.jsx';
import SuggestionContainer from './components/SuggestionContainer.jsx';
import SubProblemContainer from './components/SubProblemContainer.jsx';
import WelcomeContainer from './components/WelcomeContainer.jsx';
import WelcomeCreateForm from './components/WelcomeCreateForm.jsx';
import WelcomeUnitsContainer from './components/WelcomeUnitsContainer.jsx';
import './assets/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <Route path='/welcomecontainer' component={WelcomeContainer}>
      <IndexRoute component={WelcomeUnitsContainer}></IndexRoute>
      <Route path='/welcome' component={WelcomeUnitsContainer}></Route>
      <Route path='/welcome/create' component={WelcomeCreateForm}></Route>
    </Route>
    <Route path='/search' component={SearchContainer}></Route>
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
        <IndexRoute component={SideBarProblem}></IndexRoute>
        <Route path='/problem/sidebar' component={SideBarProblem}>
          <IndexRoute component={SolutionContainer}></IndexRoute>
          <Route path='/problem/answers' component={AnswerContainer}></Route>
          <Route path='/problem/createproblem' component={ProblemForm}></Route>
          <Route path='/problem/createsolution' component={SolutionForm}></Route>
          <Route path='/problem/questions' component={QuestionContainer}></Route>
          <Route path='/problem/solutions' component={SolutionContainer}></Route>
          <Route path='/problem/subproblems' component={SubProblemContainer}></Route>
          <Route path='/problem/suggestions' component={SuggestionContainer}></Route>
        </Route>
      </Route>
        <IndexRoute component={FullSolution}></IndexRoute>
        <Route path='/fullsolution' component={FullSolution}>
          <IndexRoute component={SideBarFullSolution}></IndexRoute>
          <Route path='/fullsolution/sidebar' component={SideBarFullSolution}>
            <IndexRoute component={SolutionContainer}></IndexRoute>
            <Route path='/fullsolution/answers' component={AnswerContainer}></Route>
            <Route path='/fullsolution/createproblem' component={ProblemForm}></Route>
            <Route path='/fullsolution/createsolution' component={SolutionForm}></Route>
            <Route path='/fullsolution/questions' component={QuestionContainer}></Route>
            <Route path='/fullsolution/solutions' component={SolutionContainer}></Route>
            <Route path='/fullsolution/subproblems' component={SubProblemContainer}></Route>
            <Route path='/fullsolution/suggestions' component={SuggestionContainer}></Route>
          </Route>
        </Route>
        <IndexRoute component={UserSolution}></IndexRoute>
        <Route path='/usersolution' component={UserSolution}>
          <IndexRoute component={SideBarUserSolution}></IndexRoute>
          <Route path='/usersolution/sidebar' component={SideBarUserSolution}>
            <IndexRoute component={SolutionContainer}></IndexRoute>
            <Route path='/usersolution/answers' component={AnswerContainer}></Route>
            <Route path='/usersolution/createproblem' component={ProblemForm}></Route>
            <Route path='/usersolution/createsolution' component={SolutionForm}></Route>
            <Route path='/usersolution/questions' component={QuestionContainer}></Route>
            <Route path='/usersolution/solutions' component={SolutionContainer}></Route>
            <Route path='/usersolution/subproblems' component={SubProblemContainer}></Route>
            <Route path='/usersolution/suggestions' component={SuggestionContainer}></Route>
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
