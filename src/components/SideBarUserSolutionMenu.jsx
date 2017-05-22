import React from 'react';
import { Link  } from 'react-router';

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
