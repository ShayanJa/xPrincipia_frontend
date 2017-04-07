import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import SolutionForm from '../components/SolutionForm.jsx';
import ProblemForm from '../components/ProblemForm.jsx';
import SolutionContainer from '../containers/SolutionContainer.jsx';
import SuggestionContainer from '../containers/SuggestionContainer.jsx';
import QuestionContainer from '../containers/QuestionContainer.jsx';



export default class SideBarProblemMenu extends React.Component {
  constructor(props){
        super(props);

    };
    

   render() {
      return (
      <div id="sidebarMenu">
        <div id="solveMenu">
                <div id="solveTitle">Solve</div>
                  <Link to={`/problem/${this.props.probID}/solutions`}><div id="solutionsButton">Top Solutions</div></Link>
                  <Link to={`/problem/${this.props.probID}/subproblems`}><div id="subproblemButton">Sub Problems</div></Link>
        </div>
        <div id="developMenu">
                <div id="developTitle">Develop</div>
                  <Link to={`/problem/${this.props.probID}/questions`}><div id="questionsButton">Questions</div></Link>
                  <Link to={`/problem/${this.props.probID}/suggestions`}><div id="suggestionsButton">Suggestions</div></Link>
        </div>
      </div>

      );
   }
}
