import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import CreateSolution from './CreateSolution.jsx';
import CreateProblem from './CreateProblem.jsx';
import SolutionContainer from './SolutionContainer.jsx';
import SuggestionContainer from './SuggestionContainer.jsx';
import QuestionContainer from './QuestionContainer.jsx';


export default class SideBarMenu extends React.Component {
   render() {
      return (
      <div id="sidebarMenu">
        <div id="solveMenu">
                <div id="solveTitle">Solve</div>
                  <Link to='home/problem/sidebar/solutions'><div id="solutionsButton">Top Solutions</div></Link>
                  <Link to='home/problem/sidebar/subproblems'><div id="subproblemButton">Sub Problems</div></Link>
        </div>
        <div id="developMenu">
                <div id="developTitle">Develop</div>
                  <Link to='home/problem/sidebar/questions'><div id="questionsButton">Questions</div></Link>
                  <Link to='home/problem/sidebar/suggestions'><div id="suggestionsButton">Suggestions</div></Link>
        </div>
      </div>

      );
   }
}
