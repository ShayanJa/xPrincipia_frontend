import React from 'react';
import { Link } from 'react-router';

export default class SideBarProblemMenu extends React.Component {

   render() {
      return (
      <div id="sidebarMenu">
        <div id="solveMenu">
                <div id="solveTitle">Solve</div>
                  <Link to={`/problem/${this.props.probID}/solutions`} activeClassName="activeMenu"><div id="solutionsButton">Top Solutions</div></Link>
                  <Link to={`/problem/${this.props.probID}/subproblems`} activeClassName="activeMenu"><div id="subproblemButton">Sub Problems</div></Link>
        </div>
        <div id="developMenu">
                <div id="developTitle">Develop</div>
                  <Link to={`/problem/${this.props.probID}/questions`} activeClassName="activeMenu"><div id="questionsButton">Questions</div></Link>
                  <Link to={`/problem/${this.props.probID}/suggestions`} activeClassName="activeMenu"><div id="suggestionsButton">Suggestions</div></Link>
        </div>
      </div>

      );
   }
}
