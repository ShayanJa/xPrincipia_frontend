import React from 'react';
import { Link } from 'react-router';

export default class SideBarProblemMenu extends React.Component {

   render() {
      return (
      <div id="sidebarMenu">

        <Link to={`/problem/${this.props.probID}/solutions`}>
          <div id="SBButton1">Solutions</div>
        </Link>

        <Link to={`/problem/${this.props.probID}/discuss`}>
          <div id="SBButton">Discuss</div>
        </Link>

        <Link to={`/problem/${this.props.probID}/questions`}>
          <div id="SBButton">Learn</div>
        </Link>

        <Link to={`/problem/${this.props.probID}/suggestions`}>
          <div id="SBButton">Theory</div>
        </Link>
        
      </div>

      );
   }
}
