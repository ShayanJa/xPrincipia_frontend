import React from 'react';
import axios from 'axios';
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
      
        <li  key={problem.ID} id="welcomeProblemsUnit">
            <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                <div id="welcomeProblemsHeaderInvisible">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                        <div id="SPPercent">{floatToDecimal(problem.PercentRank)}</div>
                    </div>
                </div>
            </Link>
        </li>
      
      
      );

} else if (problem.Title === 'Evolving Humanity') {
      return (
        <li  key={problem.ID} id="welcomeProblemsUnit">
          <Link  to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
            <div id="welcomeProblemsHeaderInvisible">
                <div id="welcomeProblemsTitle">
                    {problem.Title}
                    <div id="SPPercent">{floatToDecimal(problem.PercentRank)}</div>
                </div>
            </div>
          </Link>
        </li>
      
      );
} else if (problem.Title === 'Theoretical Knowledge') {
      return (
        <li key={problem.ID} id="welcomeProblemsUnit">
            <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                <div id="welcomeProblemsHeaderInvisible">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                        <div id="SPPercent">{floatToDecimal(problem.PercentRank)}</div>
                    </div>
                </div>
            </Link>
        </li>
      
      );
} else if (problem.Title === 'Technology Development') {
      return (
        <li key={problem.ID} id="welcomeProblemsUnit">
            <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                <div id="welcomeProblemsHeaderInvisible">
                    <div id="welcomeProblemsTitle">
                        {problem.Title}
                        <div id="SPPercent">{floatToDecimal(problem.PercentRank)}</div>
                    </div>
                </div>
            </Link>
        </li>
      
      );
} else 
      return (
        <li key={problem.ID} id="welcomeUserProblemsUnit">
            <Link to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
                <div id="welcomeUserProblemsHeader">
                    <div id="welcomeUserProblemsTitle">
                        {problem.Title}
                        <div id="SPPercent">{problem.Rank}</div>
                    </div>
                    
                </div>
            </Link>
        </li>
      );
   }
}

function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}
