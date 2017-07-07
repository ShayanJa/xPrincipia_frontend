import React from 'react';
import { Link } from 'react-router';


export default class WelcomeUnit extends React.Component {
   
	render() {
		return (
	    <div id="SPListDiv">
			<ul id="welcomeProblemsUnitList"> 
        {this.props.problems.map(this.renderItem)} 
      </ul>
	               
	    </div>
		);
	}
	renderItem(problem) {
  
if (problem.Title === 'Interstellar Civilization') {

      return (
          <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
              <li  id="welcomeProblemsUnit">
                  <div id="welcomeProblemsHeader1">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div>
              </li>
          </Link>
      );

} else if (problem.Title === 'Evolving Humanity') {
      return (
          <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
              <li  id="welcomeProblemsUnit">
                  <div id="welcomeProblemsHeader2">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div>
              </li>
          </Link>

      
      );
} else if (problem.Title === 'Theoretical Knowledge') {
      return (
          <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
              <li  id="welcomeProblemsUnit">
                  <div id="welcomeProblemsHeader3">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div>
              </li>
          </Link>

      );
} else if (problem.Title === 'Technology Development') {
      return (
          <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
              <li  id="welcomeProblemsUnit">
                  <div id="welcomeProblemsHeader4">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div>
              </li>
          </Link>

      );
} else 
      return (
          /*<Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
              <li  id="welcomeProblemsUnit">
                  <div id="welcomeProblemsHeaderInvisible">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div>
              </li>
          </Link>*/
          <div id="nodisplay">
          </div>

      );
   }
}
