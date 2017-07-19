import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';

//Load Components

import AnswerDeleteForm from './components/answers/AnswerDeleteForm.jsx';
import AnswerEditForm from './components/answers/AnswerEditForm.jsx';
import AnswerFlagForm from './components/answers/AnswerFlagForm.jsx';
import AnswerForm from './components/answers/AnswerForm.jsx';
import CommentDeleteForm from './components/comments/CommentDeleteForm.jsx';
import CommentEditForm from './components/comments/CommentEditForm.jsx';
import CommentFlagForm from './components/comments/CommentFlagForm.jsx';
import CommentForm from './components/comments/CommentForm.jsx';
import ConsDeleteForm from './components/proscons/ConsDeleteForm.jsx';
import ConsEditForm from './components/proscons/ConsEditForm.jsx';
import ConsFlagForm from './components/proscons/ConsFlagForm.jsx';
import ConsForm from './components/proscons/ConsForm.jsx';
import Error404 from './components/Error404.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import FreeFormDeleteForm from './components/freeform/FreeFormDeleteForm.jsx';
import FreeFormEditForm from './components/freeform/FreeFormEditForm.jsx';
import FreeFormFlagForm from './components/freeform/FreeFormFlagForm.jsx';
import FreeFormForm from './components/freeform/FreeFormForm.jsx';
import FullProblem from './components/problems/FullProblem.jsx';
import FullSolution from './components/solutions/FullSolution.jsx';
import FullSolutionContent from './components/solutions/FullSolutionContent.jsx';
import FullSolutionDescription from './components/solutions/FullSolutionDescription.jsx';
import FullVersion from './components/versions/FullVersion.jsx';
import Instructions from './components/tutorials/Instructions.jsx';
import Intro from './components/tutorials/Intro.jsx';
import Layout from './components/Layout.jsx';
import LearnContentDeleteForm from './components/learn/LearnContentDeleteForm.jsx';
import LearnContentEditForm from './components/learn/LearnContentEditForm.jsx';
import LearnContentFlagForm from './components/learn/LearnContentFlagForm.jsx';
import LearnContentForm from './components/learn/LearnContentForm.jsx';
import LearnResourcesDeleteForm from './components/learn/LearnResourcesDeleteForm.jsx';
import LearnResourcesEditForm from './components/learn/LearnResourcesEditForm.jsx';
import LearnResourcesEmbed from './components/learn/LearnResourcesEmbed.jsx';
import LearnResourcesFlagForm from './components/learn/LearnResourcesFlagForm.jsx';
import LearnResourcesForm from './components/learn/LearnResourcesForm.jsx';
import LoginUnit from './components/LoginUnit.jsx';
import ProblemForm from './components/problems/ProblemForm.jsx';
import ProblemDiscussMenu from './components/problems/ProblemDiscussMenu.jsx';
import ProblemLearnMenu from './components/problems/ProblemLearnMenu.jsx';
import ProblemLeftSB from './components/problems/ProblemLeftSB.jsx';
import ProblemSolutionsMenu from './components/problems/ProblemSolutionsMenu.jsx';
import ProblemTopSolutions from './components/problems/ProblemTopSolutions.jsx';
import ProjectEditForm from './components/problems/ProjectEditForm.jsx';
import ProfileAbout from './components/profile/ProfileAbout.jsx';
import ProfileCareers from './components/profile/ProfileCareers.jsx';
import ProfileDisclaimer from './components/profile/ProfileDisclaimer.jsx';
import ProfileNotifications from './components/profile/ProfileNotifications.jsx';
import ProfileProblemsSolutions from './components/profile/ProfileProblemsSolutions.jsx';
import ProfileResume from './components/profile/ProfileResume.jsx';
import ProsDeleteForm from './components/proscons/ProsDeleteForm.jsx';
import ProsEditForm from './components/proscons/ProsEditForm.jsx';
import ProsFlagForm from './components/proscons/ProsFlagForm.jsx';
import ProsForm from './components/proscons/ProsForm.jsx';
import QuestionDeleteForm from './components/questions/QuestionDeleteForm.jsx';
import QuestionEditForm from './components/questions/QuestionEditForm.jsx';
import QuestionFlagForm from './components/questions/QuestionFlagForm.jsx';
import QuestionForm from './components/questions/QuestionForm.jsx';
import Redirection from './components/Redirection.jsx';
import RegisterUnit from './components/RegisterUnit.jsx';
import SideBarProblem from './components/problems/SideBarProblem';
import SolutionDeleteForm from './components/solutions/SolutionDeleteForm.jsx';
import SolutionEditForm from './components/solutions/SolutionEditForm.jsx';
import SolutionForm from './components/solutions/SolutionForm.jsx';
import SuggestionDeleteForm from './components/suggestions/SuggestionDeleteForm.jsx';
import SuggestionEditForm from './components/suggestions/SuggestionEditForm.jsx';
import SuggestionFlagForm from './components/suggestions/SuggestionFlagForm.jsx';
import SuggestionForm from './components/suggestions/SuggestionForm.jsx';
import TutorialWelcomeButton from './components/tutorials/TutorialWelcomeButton.jsx';
import TutorialWelcomeContent from './components/tutorials/TutorialWelcomeContent.jsx';
import TutorialWelcomePage from './components/tutorials/TutorialWelcomePage.jsx';
import VersionForm from './components/versions/VersionForm.jsx';
import WelcomeCreateButton from './components/welcome/WelcomeCreateButton.jsx';
import WelcomeCreateForm from './components/welcome/WelcomeCreateForm.jsx';


//Load Containers
import AnswerContainer from './containers/AnswerContainer.jsx';
import ConsContainer from './containers/ConsContainer.jsx';
import ErrorContainer from './containers/ErrorContainer.jsx';
import FreeFormContainer from './containers/FreeFormContainer.jsx';
import FreeFormCommentContainer from './containers/FreeFormCommentContainer.jsx';
import FullSolutionContainer from './containers/FullSolutionContainer.jsx';
import LearnContentContainer1 from './containers/LearnContentContainer1.jsx';
import LearnResourcesContainer1 from './containers/LearnResourcesContainer1.jsx';
import LoginContainer from './containers/LoginContainer.jsx';
import NewsFeedContainer from './containers/NewsFeedContainer.jsx';
import ProfileAboutContainer from './containers/ProfileAboutContainer.jsx';
import ProfileContainer from './containers/ProfileContainer.jsx';
import ProsContainer from './containers/ProsContainer.jsx';
import QuestionContainer from './containers/QuestionContainer.jsx';
import SearchContainer from './containers/SearchContainer.jsx';
import SubProblemContainer from './containers/SubProblemContainer.jsx';
import SuggestionCommentContainer from './containers/SuggestionCommentContainer.jsx';
import SuggestionContainer from './containers/SuggestionContainer.jsx';
import VersionsContainer from './containers/VersionsContainer.jsx'
import WelcomeContainer from './containers/WelcomeContainer.jsx';
// import Profile from './components/Profile.jsx'
//Assets
import './assets/index.css';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Intro}></IndexRoute>
    <Route path='/intro' component={Intro}></Route>
    <IndexRoute component={Intro}></IndexRoute>
    <Route path='/welcome/tutorial' component={TutorialWelcomePage}>
      <IndexRoute component={TutorialWelcomeButton}></IndexRoute>
      <Route path='/welcome/tutorial/hide' component={ProfileProblemsSolutions}></Route>
      <Route path='/welcome/tutorial/show' component={TutorialWelcomeContent}></Route>
    </Route>
    <Route path='/error' component={ErrorContainer}>
      <IndexRoute component={Redirection}></IndexRoute>
      <Route path='/404' component={Error404}></Route>
      <Route path='/redirection' component={Redirection}></Route>
    </Route>
    <Route path='/search' component={SearchContainer}></Route>
    <Route path='/intro' component={Intro}></Route>
    <Route path='/newsfeed' component={NewsFeedContainer}></Route>
    <Route path='/instructions' component={Instructions}></Route>
    <Route path='/logincontainer' component={LoginContainer}>
      <IndexRoute component={LoginContainer}></IndexRoute>
      <Route path='/login' component={LoginUnit}></Route>
      <Route path='/register' component={RegisterUnit}></Route>
    </Route>
    <IndexRoute component={Layout}></IndexRoute>
    <Route path='/home' component={Layout}>
      <IndexRoute component={FullProblem}></IndexRoute>
      <Route path='/welcomecontainer' component={WelcomeContainer}>
        <IndexRoute component={WelcomeCreateButton}></IndexRoute>
        <Route path='/welcome' component={WelcomeCreateButton}></Route>
        <Route path='/welcome/create' component={WelcomeCreateForm}></Route>
      </Route>
      <Route path='/profile/container' component={ProfileContainer}>
        <IndexRoute component={ProfileProblemsSolutions}></IndexRoute>
        <Route path='/profile' component={ProfileProblemsSolutions}></Route>
        <Route path='/profile/resume' component={ProfileResume}></Route>
        <Route path='/profile/feedback' component={FeedbackForm}></Route>
        <Route path='/profile/notifications' component={ProfileNotifications}></Route>
        <Route path='/profile/about/container' component={ProfileAboutContainer}>
          <IndexRoute component={ProfileAbout}></IndexRoute>
          <Route path='/profile/about' component={ProfileAbout}></Route>
          <Route path='/profile/careers' component={ProfileCareers}></Route>
        </Route>
        <Route path='/profile/disclaimer' component={ProfileDisclaimer}></Route>
      </Route>
      <Route path='/problem/:probID' component={FullProblem}>
        <IndexRoute component={SideBarProblem}></IndexRoute>
        <Route path='/problem/:probID/sideBar' component={SideBarProblem}>
          <IndexRoute component={SubProblemContainer}></IndexRoute>
          <Route path='/problem/:probID/create' component={ProblemForm}></Route>
          <Route path='/problem/:probID/edit' component={ProjectEditForm}></Route>
          <Route path='/problem/:probID/subproblems' component={SubProblemContainer}></Route>
        </Route>
      </Route>
      <IndexRoute component={ProblemLeftSB}></IndexRoute>
        <Route path='/problem/:probID/sb' component={ProblemLeftSB}>
          <IndexRoute component={ProblemSolutionsMenu}></IndexRoute>
          <Route path='/problem/:probID/solutions' component={ProblemSolutionsMenu}>
            <IndexRoute component={ProblemTopSolutions}></IndexRoute>
            <Route path='/problem/:probID/solutions/create' component={SolutionForm}></Route>
            <Route path='/problem/:probID/solutions/top' component={ProblemTopSolutions}></Route>
            <Route path='/fullsolution/:probID/:solutionID/container' component={FullSolutionContainer}>
              <IndexRoute component={FullSolution}></IndexRoute>
              <Route path='/fullsolution/:probID/:solutionID' component={FullSolution}>
                <IndexRoute component={FullSolutionContent}></IndexRoute>
                <Route path='/fullsolution/:probID/:solutionID/delete' component={SolutionDeleteForm}></Route>
                <Route path='/fullsolution/:probID/:solutionID/edit' component={SolutionEditForm}></Route>
                <Route path='/fullsolution/:probID/:solutionID/full' component={FullSolutionContent}>
                  <IndexRoute component={FullSolutionDescription}></IndexRoute>
                  <Route path='/fullsolution/:probID/:solutionID/description' component={FullSolutionDescription}></Route>
                  <Route path='/fullsolution/:probID/:solutionID/pros' component={ProsContainer}>
                    <IndexRoute component={ProsForm}></IndexRoute>
                    <Route path='/problem/:probID/:solutionID/pros/pros' component={ProsForm}></Route>
                    <Route path='/problem/:probID/:solutionID/pros/:proID/edit' component={ProsEditForm}></Route>
                    <Route path='/problem/:probID/:solutionID/pros/:proID/flag' component={ProsFlagForm}></Route>
                    <Route path='/problem/:probID/:solutionID/pros/:proID/delete' component={ProsDeleteForm}></Route>
                  </Route>
                  <Route path='/fullsolution/:probID/:solutionID/cons' component={ConsContainer}>
                    <IndexRoute component={ConsForm}></IndexRoute>
                    <Route path='/problem/:probID/:solutionID/cons' component={ConsForm}></Route>
                    <Route path='/problem/:probID/:solutionID/cons/:conID/edit' component={ConsEditForm}></Route>
                    <Route path='/problem/:probID/:solutionID/cons/:conID/flag' component={ConsFlagForm}></Route>
                    <Route path='/problem/:probID/:solutionID/cons/:conID/delete' component={ConsDeleteForm}></Route>
                  </Route>                
                </Route>
                <Route path='/fullsolution/:probID/:solutionID/versions' component={VersionsContainer}></Route>
                <Route path='/fullsolution/:probID/:solutionID/fullversion' component={FullVersion}></Route>
                <Route path='/fullsolution/:probID/:solutionID/versionform' component={VersionForm}></Route>
              </Route>
            </Route>
          </Route>
          <IndexRoute component={ProblemDiscussMenu}></IndexRoute>
          <Route path='/problem/:probID/discuss' component={ProblemDiscussMenu}>
            <IndexRoute component={QuestionContainer}></IndexRoute>
            <Route path='/problem/:probID/questions/container' component={QuestionContainer}>
              <IndexRoute component={QuestionForm}></IndexRoute>
              <Route path='/problem/:probID/questions' component={QuestionForm}></Route>
              <Route path='/problem/:probID/question/:questID/edit' component={QuestionEditForm}></Route>
              <Route path='/problem/:probID/question/:questID/flag' component={QuestionFlagForm}></Route>
              <Route path='/problem/:probID/question/:questID/delete' component={QuestionDeleteForm}></Route>
            </Route> 
            <Route path='/problem/:probID/question/:questID/answers/container' component={AnswerContainer}>
              <IndexRoute component={AnswerForm}></IndexRoute>
              <Route path='/problem/:probID/question/:questID/answers' component={AnswerForm}></Route>
              <Route path='/problem/:probID/question/:questID/answer/:answerID/edit' component={AnswerEditForm}></Route>
              <Route path='/problem/:probID/question/:questID/answer/:answerID/flag' component={AnswerFlagForm}></Route>
              <Route path='/problem/:probID/question/:questID/answer/:answerID/delete' component={AnswerDeleteForm}></Route>
            </Route>
            <Route path='/problem/:probID/suggestions/container' component={SuggestionContainer}>
              <IndexRoute component={SuggestionForm}></IndexRoute>
              <Route path='/problem/:probID/suggestions' component={SuggestionForm}></Route>
              <Route path='/problem/:probID/suggestion/:suggID/edit' component={SuggestionEditForm}></Route>
              <Route path='/problem/:probID/suggestion/:suggID/flag' component={SuggestionFlagForm}></Route>
              <Route path='/problem/:probID/suggestion/:suggID/delete' component={SuggestionDeleteForm}></Route>
            </Route>
            <Route path='/problem/:probID/suggestion/:suggID/container' component={SuggestionCommentContainer}>
            <IndexRoute component={CommentForm}></IndexRoute>
              <Route path='/problem/:probID/suggestion/:suggID/comments' component={CommentForm}></Route>
              <Route path='/problem/:probID/suggestion/:suggID/comment/:commentID/edit' component={CommentEditForm}></Route>
              <Route path='/problem/:probID/suggestion/:suggID/comment/:commentID/flag' component={CommentFlagForm}></Route>
              <Route path='/problem/:probID/suggestion/:suggID/comment/:commentID/delete' component={CommentDeleteForm}></Route>
            </Route>
            <Route path='/problem/:probID/freeforms/container' component={FreeFormContainer}>
              <IndexRoute component={FreeFormForm}></IndexRoute>
              <Route path='/problem/:probID/freeforms' component={FreeFormForm}></Route>
              <Route path='/problem/:probID/freeform/:freeFormID/edit' component={FreeFormEditForm}></Route>
              <Route path='/problem/:probID/freeform/:freeFormID/flag' component={FreeFormFlagForm}></Route>
              <Route path='/problem/:probID/freeform/:freeFormID/delete' component={FreeFormDeleteForm}></Route>
            </Route>
            <Route path='/problem/:probID/freeform/:freeID/comments' component={FreeFormCommentContainer}></Route>
          </Route>
          {/*<IndexRoute component={ProblemLearnMenu}></IndexRoute>*/}
          <Route path='/problem/:probID/learn' component={ProblemLearnMenu}>
              <Route path='/problem/:probID/learn/content/full' component={LearnContentContainer1}>
                <IndexRoute component={LearnContentForm}></IndexRoute>
                <Route path='/problem/:probID/learn/content' component={LearnContentForm}></Route>
                <Route path='/problem/:probID/learn/content/:learnItemID/edit' component={LearnContentEditForm}></Route>
                <Route path='/problem/:probID/learn/content/:learnItemID/flag' component={LearnContentFlagForm}></Route>
                <Route path='/problem/:probID/learn/content/:learnItemID/delete' component={LearnContentDeleteForm}></Route>
              
             </Route>
           
              <Route path='/problem/:probID/learn/resources/full' component={LearnResourcesContainer1}>
                <IndexRoute component={LearnResourcesForm}></IndexRoute>
                <Route path='/problem/:probID/learn/resources' component={LearnResourcesForm}></Route>
                <Route path='/problem/:probID/learn/resources/:resourceID/edit' component={LearnResourcesEditForm}></Route>
                <Route path='/problem/:probID/learn/resources/:resourceID/flag' component={LearnResourcesFlagForm}></Route>
                <Route path='/problem/:probID/learn/resources/:resourceID/delete' component={LearnResourcesDeleteForm}></Route>  
                <Route path='/problem/:probID/learn/resources/:resourceID/embed' component={LearnResourcesEmbed}></Route>            
              </Route>
            </Route>
          </Route>
       
      </Route>
    </Route>
    {/*<Redirect from='*' to='/404' />*/}
    <Route path='*' component={Error404}/>
  </Router>,
  document.getElementById('root')
);
