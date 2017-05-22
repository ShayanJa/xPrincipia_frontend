import React from 'react';
import {Link} from 'react-router';

export default class SubProblemUnit extends React.Component {

	render() {
		return (
	    <div>
				<ul id="SPUnitList"> {this.props.problems.map(this.renderItem)}</ul>         
	    </div>
		);
	}
	renderItem(problem) {
  
    return (

        <Link to={`/problem/${problem.ID}/subproblems`}>
				<li key={problem.ID} id="SPUnit">
				<div id="SPHeader">
					<div id="SPTitle">{problem.Title}</div>
					<div id="percent">{floatToDecimal(problem.PercentRank)}</div>
					<div id="SPVote">Vote</div>
				</div>
			</li>
		</Link>

	);
  }
}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}