import React from 'react';
import { Link } from 'react-router';


export default class WelcomeUnit extends React.Component {
   
	constructor(props){
        super(props);
	}
	render() {
		return (
	    <div>
			<ul> {this.props.problems.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(problem) {
  
      return (

      <li key={problem.ID} id="welcomeProblemsUnit">
          <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
            <div id="welcomeProblemsHeader">
              <div id="welcomeProblemsTag">{problem.Field}</div>
              <div id="welcomeProblemsTitle">
                  {problem.Title}
              </div>
            </div>
          </Link>
      </li>

      );
   }
}
