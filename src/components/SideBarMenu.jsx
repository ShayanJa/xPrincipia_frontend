import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import SolutionForm from './SolutionForm.jsx';
import ProblemForm from './ProblemForm.jsx';
import SolutionContainer from './SolutionContainer.jsx';
import SuggestionContainer from './SuggestionContainer.jsx';
import QuestionContainer from './QuestionContainer.jsx';


export default class SideBarMenu extends React.Component {
   render() {
      return (
      <div id="sidebarMenu">
        <div id="solveMenu">
                <div id="solveTitle">Solve</div>
                  <Link to='/problem/solutions'><div id="solutionsButton">Top Solutions</div></Link>
                  <Link to='/problem/subproblems'><div id="subproblemButton">Sub Problems</div></Link>
        </div>
        <div id="developMenu">
                <div id="developTitle">Develop</div>
                  <Link to='/problem/questions'><div id="questionsButton">Questions</div></Link>
                  <Link to='/problem/suggestions'><div id="suggestionsButton">Suggestions</div></Link>
        </div>
      </div>

      );
   }
}
