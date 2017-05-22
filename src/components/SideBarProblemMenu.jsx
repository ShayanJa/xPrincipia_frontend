import React from 'react';
import { Link } from 'react-router';

export default class SideBarProblemMenu extends React.Component {

   render() {
      return (
      <div id="sidebarMenu">
        <Link to={`/problem/${this.props.probID}/solutions`} activeClassName="activeGreen"><div id="solutionsButton">Solutions</div></Link>
        <Link to={`/problem/${this.props.probID}/subproblems`} activeClassName="activeGreen"><div id="subproblemButton">Discuss</div></Link>
        <Link to={`/problem/${this.props.probID}/questions`} activeClassName="activeGreen"><div id="questionsButton">Learn</div></Link>
        <Link to={`/problem/${this.props.probID}/suggestions`} activeClassName="activeGreen"><div id="suggestionsButton">Theory</div></Link>
      </div>

      );
   }
}
