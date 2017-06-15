import React from 'react';
import { Link } from 'react-router';


export default class WelcomeUserUnit extends React.Component {
   
	render() {
		return (
	    <div id="SPListDiv">
			<ul id="welcomeUserProblemsUnitList"> 
        {this.props.problems.map(this.renderItem)} 
      </ul>
	               
	    </div>
		);
	}
	renderItem(problem) {
  
if (problem.Title === 'Interstellar Civilization') {

      return (
      
        <li  id="welcomeProblemsUnit">
            <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                <div id="welcomeProblemsHeaderInvisible">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                </div>
            </Link>
        </li>
      
      
      );

} else if (problem.Title === 'Evolving Humanity') {
      return (
        <li  id="welcomeProblemsUnit">
          <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
            <div id="welcomeProblemsHeaderInvisible">
                <div id="welcomeProblemsTitle">
                    {problem.Title}
                </div>
            </div>
          </Link>
        </li>
      
      );
} else if (problem.Title === 'Theoretical Knowledge') {
      return (
        <li  id="welcomeProblemsUnit">
            <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                <div id="welcomeProblemsHeaderInvisible">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                </div>
            </Link>
        </li>
      
      );
} else if (problem.Title === 'Technology Development') {
      return (
        <li  id="welcomeProblemsUnit">
            <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                <div id="welcomeProblemsHeaderInvisible">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                    </div>
                </div>
            </Link>
        </li>
      
      );
} else 
      return (
        <li  id="welcomeUserProblemsUnit">
            <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                <div id="welcomeUserProblemsHeader">
                    <div id="welcomeUserProblemsTitle">
                        {problem.Title}
                    </div>
                </div>
            </Link>
        </li>
      );
   }
}
