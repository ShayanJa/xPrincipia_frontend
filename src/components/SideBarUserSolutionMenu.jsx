import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import SolutionForm from './SolutionForm.jsx';
import ProblemForm from './ProblemForm.jsx';
import SolutionContainer from '../containers/SolutionContainer.jsx';
import SuggestionContainer from '../containers/SuggestionContainer.jsx';
import QuestionContainer from '../containers/QuestionContainer.jsx';


export default class SideBarUserSolutionMenu extends React.Component {
   render() {
      return (
      <div id="sidebarMenu">
        <div id="solveMenu">
                <div id="solveTitle">Solve</div>
                  <Link to='/usersolution/solutions'><div id="solutionsButton">Top Solutions</div></Link>
                  <Link to='/usersolution/subproblems'><div id="subproblemButton">Sub Problems</div></Link>
        </div>
        <div id="developMenu">
                <div id="developTitle">Develop</div>
                  <Link to='/usersolution/questions'><div id="questionsButton">Questions</div></Link>
                  <Link to='/usersolution/suggestions'><div id="suggestionsButton">Suggestions</div></Link>
        </div>
      </div>

      );
   }
}