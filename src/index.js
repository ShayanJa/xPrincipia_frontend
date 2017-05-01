import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';

//Load Components

import Error404 from './components/Error404.jsx';
import FullProblem from './components/FullProblem.jsx';
import FullSolution from './components/FullSolution.jsx';
// import Info from './components/Info.jsx';
import Instructions from './components/Instructions.jsx';
import Intro from './components/Intro.jsx';
import Layout from './components/Layout.jsx';
import LoginUnit from './components/LoginUnit.jsx';
import ProblemForm from './components/ProblemForm.jsx';
import Redirection from './components/Redirection.jsx';
import RegisterUnit from './components/RegisterUnit.jsx';
import SideBarFullSolution from './components/SideBarFullSolution';
import SideBarProblem from './components/SideBarProblem';
import SideBarUserSolution from './components/SideBarUserSolution';
import SolutionForm from './components/SolutionForm.jsx';
import UserSolution from './components/UserSolution.jsx';
import WelcomeCreateForm from './components/WelcomeCreateForm.jsx';

//Load Containers
import AnswerContainer from './containers/AnswerContainer.jsx';
import CommentContainer from './containers/CommentContainer.jsx';
import ErrorContainer from './containers/ErrorContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import NewsFeedContainer from './containers/NewsFeedContainer.jsx';
import ProfileContainer from './containers/ProfileContainer.jsx';
import QuestionContainer from './containers/QuestionContainer.jsx';
import SearchContainer from './containers/SearchContainer.jsx';
import SolutionContainer from './containers/SolutionContainer.jsx';
import SubProblemContainer from './containers/SubProblemContainer.jsx';
import SuggestionContainer from './containers/SuggestionContainer.jsx';
import WelcomeContainer from './containers/WelcomeContainer.jsx';
import WelcomeUnitsContainer from './containers/WelcomeUnitsContainer.jsx';
// import Profile from './components/Profile.jsx'
//Assets
import './assets/index.css';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <Route path='/welcomecontainer' component={WelcomeContainer}>
      <IndexRoute component={WelcomeUnitsContainer}></IndexRoute>
      <Route path='/welcome' component={WelcomeUnitsContainer}></Route>
      <Route path='/welcome/create' component={WelcomeCreateForm}></Route>
    </Route>
    <Route path='/error' component={ErrorContainer}>
      <IndexRoute component={Redirection}></IndexRoute>
      <Route path='/404' component={Error404}></Route>
      <Route path='/redirection' component={Redirection}></Route>
    </Route>
    <Route path='/search' component={SearchContainer}></Route>
    <Route path='/profile' component={ProfileContainer}></Route>
    <Route path='/newsfeed' component={NewsFeedContainer}></Route>
    <Route path='/intro' component={Intro}></Route>
    <Route path='/instructions' component={Instructions}></Route>
    <Route path='/logincontainer' component={LoginContainer}>
      <IndexRoute component={LoginContainer}></IndexRoute>
      <Route path='/login' component={LoginUnit}></Route>
      <Route path='/register' component={RegisterUnit}></Route>
    </Route>
    <IndexRoute component={Layout}></IndexRoute>
    <Route path='/home' component={Layout}>
      <IndexRoute component={FullProblem}></IndexRoute>
      <Route path='/problem/:probID' component={FullProblem}>
        <IndexRoute component={SideBarProblem}></IndexRoute>
        <Route path='/problem/:probID/SideBar' component={SideBarProblem}>
          <IndexRoute component={SolutionContainer}></IndexRoute>
          <Route path='/problem/:probID/problem/create' component={ProblemForm}></Route>
          <Route path='/problem/:probID/solution/create' component={SolutionForm}></Route>
          <Route path='/problem/:probID/solutions' component={SolutionContainer}></Route>
          <Route path='/problem/:probID/subproblems' component={SubProblemContainer}></Route>
          <Route path='/problem/:probID/questions' component={QuestionContainer}></Route>
          <Route path='/problem/:probID/question/:questID/answers' component={AnswerContainer}></Route>
          <Route path='/problem/:probID/suggestions' component={SuggestionContainer}></Route>
          <Route path='/problem/:probID/suggestion/:suggID/comments' component={CommentContainer}></Route>
        </Route>
      </Route>
        <IndexRoute component={FullSolution}></IndexRoute>
        <Route path='/fullsolution/:probID/:solutionID' component={FullSolution}>
          <IndexRoute component={SideBarFullSolution}></IndexRoute>
          <Route path='/fullsolution/:probID/:solutionID/sidebar' component={SideBarFullSolution}>
            <IndexRoute component={SolutionContainer}></IndexRoute>
            <Route path='/fullsolution/:probID/:solutionID/answers' component={AnswerContainer}></Route>
            <Route path='/fullsolution/:probID/:solutionID/createproblem' component={ProblemForm}></Route>
            <Route path='/fullsolution/:probID/:solutionID/createsolution' component={SolutionForm}></Route>
            <Route path='/fullsolution/:probID/:solutionID/questions' component={QuestionContainer}></Route>
            <Route path='/fullsolution/:probID/:solutionID/solutions' component={SolutionContainer}></Route>
            <Route path='/fullsolution/:probID/:solutionID/subproblems' component={SubProblemContainer}></Route>
            <Route path='/fullsolution/:probID/:solutionID/suggestions' component={SuggestionContainer}></Route>
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
    <Route path='*' component={Error404} />
  </Router>,
  document.getElementById('root')
);
