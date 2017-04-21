import React from 'react';
import { Link } from 'react-router';


export default class WelcomeUnit extends React.Component {
   
	render() {
		return (
	    <div>
			<ul> {this.props.problems.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(problem) {
  
      return (
      <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
        <li  id="welcomeProblemsUnit">
            
              <div id="welcomeProblemsHeader">
                <div id="welcomeProblemsTag">{problem.Field}</div>
                <div id="welcomeProblemsTitle">
                    {problem.Title}
                </div>
              </div>
            
        </li>
      </Link>

      );
   }
}
