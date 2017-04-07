import React from 'react';
import { Link } from 'react-router';
import $ from 'min-jquery';

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
          <Link to={{pathname: '/problem/'+problem.ID }}>
            <div id="welcomeProblemsHeader">
              <div id="welcomeProblemsTag">Consciousness</div>
              <div id="welcomeProblemsTitle">
                  Global workspace model contrasting natural selection and higher consciousness
              </div>
            </div>
          </Link>
      </li>

      );
   }
}
