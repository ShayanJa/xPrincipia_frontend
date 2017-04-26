import React from 'react';
import {Link} from 'react-router';

export default class SubProblemUnit extends React.Component {

	render() {
		return (
	    <div>
				<ul> {this.props.problems.map(this.renderItem)}</ul>         
	    </div>
		);
	}
	renderItem(problem) {
  
    return (

        <li key={problem.ID} id="subProblemUnit">
				<Link to={`/problem/${problem.ID}/subproblems`} >
					<div id="subProblemTitle">
						<div id="percent">{floatToDecimal(problem.PercentRank)}</div>
						<div id="unitTitle">{problem.Title}</div>
						{/*<button type="button" id="problemVote">Vote</button>*/}
					</div>
					<div id="subProblemSummary">{problem.Summary}</div>
				</Link>

        <br ></br> 

        </li>);
	
  }
}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}