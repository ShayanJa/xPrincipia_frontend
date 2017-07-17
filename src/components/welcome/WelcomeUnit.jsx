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
          <li key={problem.ID} id="welcomeProblemsUnit">
            <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                  <div id="welcomeProblemsHeader1">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div>
            </Link>
          </li>
      );

} else if (problem.Title === 'Evolving Humanity') {
      return (
         <li key={problem.ID} id="welcomeProblemsUnit">
           <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                  <div id="welcomeProblemsHeader2">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div> 
            </Link>
          </li>

      
      );
} else if (problem.Title === 'Theoretical Knowledge') {
      return (
         <li key={problem.ID} id="welcomeProblemsUnit">
           <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                  <div id="welcomeProblemsHeader3">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div>
            </Link>
          </li>

      );
} else if (problem.Title === 'Technology Development') {
      return (
          <li key={problem.ID} id="welcomeProblemsUnit">
            <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                  <div id="welcomeProblemsHeader4">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                  </div>
            </Link>
          </li>
          

      );
} else 
      return (
          <li key={problem.ID} id="nodisplay">
          </li>

      );
   }
}
