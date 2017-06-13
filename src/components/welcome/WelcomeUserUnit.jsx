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
      <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
        <li  id="welcomeProblemsUnit">
          <div id="welcomeProblemsHeaderInvisible">
            <div id="welcomeProblemsTitle">
                {problem.Title}
            </div>
          </div>
        </li>
      </Link>);

} else if (problem.Title === 'Evolving Humanity') {
      return (
      <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
        <li  id="welcomeProblemsUnit">
          <div id="welcomeProblemsHeaderInvisible">
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
          <div id="welcomeProblemsHeaderInvisible">
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
          <div id="welcomeProblemsHeaderInvisible">
            <div id="welcomeProblemsTitle">
                {problem.Title}
            </div>
          </div>
        </li>
      </Link>
      );
} else 
      return (
      <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
        <li  id="welcomeUserProblemsUnit">
          <div id="welcomeUserProblemsHeader">
            <div id="welcomeUserProblemsTitle">
                {problem.Title}
            </div>
          </div>
        </li>
      </Link>
      );
   }
}
