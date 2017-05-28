import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';

//Load Components

import Error404 from './components/Error404.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import FullProblem from './components/FullProblem.jsx';
import FullSolution from './components/FullSolution.jsx';
import FullSolutionContent from './components/FullSolutionContent.jsx';
import FullVersion from './components/FullVersion.jsx';
// import Info from './components/Info.jsx';
import Instructions from './components/Instructions.jsx';
import Intro from './components/Intro.jsx';
import Layout from './components/Layout.jsx';
import LoginUnit from './components/LoginUnit.jsx';
import ProblemForm from './components/ProblemForm.jsx';
import ProblemLeftSB from './components/ProblemLeftSB.jsx';
import ProblemDiscussMenu from './components/ProblemDiscussMenu.jsx';
import ProblemLearnMenu from './components/ProblemLearnMenu.jsx';
import ProblemSolutionsMenu from './components/ProblemSolutionsMenu.jsx';
import ProblemTopSolutions from './components/ProblemTopSolutions.jsx';
import ProfileNotifications from './components/ProfileNotifications.jsx';
import ProfileProblemsSolutions from './components/ProfileProblemsSolutions.jsx';
import Redirection from './components/Redirection.jsx';
import RegisterUnit from './components/RegisterUnit.jsx';
import SideBarFullSolution from './components/SideBarFullSolution';
import SideBarProblem from './components/SideBarProblem';
import SolutionForm from './components/SolutionForm.jsx';
import VersionForm from './components/VersionForm.jsx';
import WelcomeCreateForm from './components/WelcomeCreateForm.jsx';

//Load Containers
import AnswerContainer from './containers/AnswerContainer.jsx';
import ConsContainer from './containers/ConsContainer.jsx';
import ErrorContainer from './containers/ErrorContainer.jsx';
import FreeFormContainer from './containers/FreeFormContainer.jsx';
import FreeFormCommentContainer from './containers/FreeFormCommentContainer.jsx';
import FullSolutionContainer from './containers/FullSolutionContainer.jsx';
import LearnContentContainer from './containers/LearnContentContainer.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import NewsFeedContainer from './containers/NewsFeedContainer.jsx';
import ProfileContainer from './containers/ProfileContainer.jsx';
import ProsContainer from './containers/ProsContainer.jsx';
import ProsConsCommentContainer from './containers/ProsConsCommentContainer.jsx';
import QuestionContainer from './containers/QuestionContainer.jsx';
import SearchContainer from './containers/SearchContainer.jsx';
import SolutionContainer from './containers/SolutionContainer.jsx';
import SubProblemContainer from './containers/SubProblemContainer.jsx';
import SuggestionCommentContainer from './containers/SuggestionCommentContainer.jsx';
import SuggestionContainer from './containers/SuggestionContainer.jsx';
import VersionsContainer from './containers/VersionsContainer.jsx'
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
    <Route path='/profile' component={ProfileContainer}>
      <IndexRoute component={ProfileProblemsSolutions}></IndexRoute>
      <Route path='/profile/usercontent' component={ProfileProblemsSolutions}></Route>
      <Route path='/profile/feedback' component={FeedbackForm}></Route>
      <Route path='/profile/notifications' component={ProfileNotifications}></Route>
    </Route>
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
          <Route path='/problem/:probID/subproblems' component={SubProblemContainer}></Route>
        </Route>
      </Route>
      <IndexRoute component={ProblemLeftSB}></IndexRoute>
        <Route path='/problem/:probID/sb' component={ProblemLeftSB}>
          <IndexRoute component={ProblemSolutionsMenu}></IndexRoute>
          <Route path='/problem/:probID/solutions' component={ProblemSolutionsMenu}>
            <IndexRoute component={ProblemTopSolutions}></IndexRoute>
            <Route path='/problem/:probID/solutions' component={ProblemTopSolutions}></Route>
            <Route path='/problem/:probID/solutions/create' component={SolutionForm}></Route>
            <Route path='/fullsolution/:probID/:solutionID/container' component={FullSolutionContainer}>
              <IndexRoute component={FullSolution}></IndexRoute>
              <Route path='/fullsolution/:probID/:solutionID' component={FullSolution}>
                <IndexRoute component={FullSolutionContent}></IndexRoute>
                <Route path='/fullsolution/:probID/:solutionID/full' component={FullSolutionContent}></Route>
                <Route path='/fullsolution/:probID/:solutionID/pros' component={ProsContainer}></Route>
                <Route path='/fullsolution/:probID/:solutionID/cons' component={ConsContainer}></Route>
                <Route path='/fullsolution/:probID/:solutionID/versions' component={VersionsContainer}></Route>
                <Route path='/fullsolution/:probID/:solutionID/fullversion' component={FullVersion}></Route>
                <Route path='/fullsolution/:probID/:solutionID/versionform' component={VersionForm}></Route>
              </Route>
              
              

            </Route>
          </Route>
          <IndexRoute component={ProblemDiscussMenu}></IndexRoute>
          <Route path='/problem/:probID/discuss' component={ProblemDiscussMenu}>
            <IndexRoute component={QuestionContainer}></IndexRoute>
            <Route path='/problem/:probID/questions' component={QuestionContainer}></Route>
            <Route path='/problem/:probID/question/:questID/answers' component={AnswerContainer}></Route>
            <Route path='/problem/:probID/suggestions' component={SuggestionContainer}></Route>
            <Route path='/problem/:probID/suggestion/:suggID/comments' component={SuggestionCommentContainer}></Route>
            <Route path='/problem/:probID/freeform' component={FreeFormContainer}></Route>
            <Route path='/problem/:probID/freeform/:ffID/comments' component={FreeFormCommentContainer}></Route>
          </Route>
          <IndexRoute component={ProblemLearnMenu}></IndexRoute>
          <Route path='/problem/:probID/learn' component={ProblemLearnMenu}>
            <IndexRoute component={LearnContentContainer}></IndexRoute>
            <Route path='/problem/:probID/learn/content' component={LearnContentContainer}></Route>
            <Route path='/problem/:probID/question/:questID/answers' component={AnswerContainer}></Route>
            <Route path='/problem/:probID/suggestions' component={SuggestionContainer}></Route>
            <Route path='/problem/:probID/suggestion/:suggID/comments' component={SuggestionCommentContainer}></Route>
          </Route>
        </Route>        

      <IndexRoute component={FullSolution}></IndexRoute>
      <Route path='/fullsolution/:probID/:solutionID/x' component={FullSolution}>
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
      </Route>
    </Route>
    {/*<Redirect from='*' to='/404' />*/}
    <Route path='*' component={Error404}/>
  </Router>,
  document.getElementById('root')
);
