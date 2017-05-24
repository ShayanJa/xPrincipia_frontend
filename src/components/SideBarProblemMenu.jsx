import React from 'react';
import { Link } from 'react-router';

export default class SideBarProblemMenu extends React.Component {

   render() {
      return (
      <div id="sidebarMenu">

        <Link to={`/problem/${this.props.probID}/solutions`} activeClassName="activeXGreen">
          <div id="SBButton1">Solutions</div>
        </Link>

        <Link to={`/problem/${this.props.probID}/subproblems`} activeClassName="activeXGreen">
          <div id="SBButton">Discuss</div>
        </Link>

        <Link to={`/problem/${this.props.probID}/questions`} activeClassName="activeXGreen">
          <div id="SBButton">Learn</div>
        </Link>

        <Link to={`/problem/${this.props.probID}/suggestions`} activeClassName="activeXGreen">
          <div id="SBButton">Theory</div>
        </Link>
        
      </div>

      );
   }
}
