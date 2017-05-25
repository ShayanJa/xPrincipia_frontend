import React from 'react';
import { Link } from 'react-router';

export default class SolutionUnit extends React.Component {

	render() {
		return (
	    <div>
			<ul> {this.props.solutions.map(this.renderItem)} </ul>     
	    </div>

		);
	}

	renderItem(solution) {

    return (

        <li key={solution.ID}>

			<div id="solutionUnit">
			<Link to={`/fullsolution/${solution.ProblemID}/${solution.ID}/`}>

				<div id="solutionUnitTitle">
					<div id="percent">{floatToDecimal(solution.PercentRank)}</div>
					<div id="unitTitle">{solution.Title}</div>
				</div>
				{/*<div id="solutionUnitSummary">
					{solution.Summary}
				</div>*/}
			</Link>
			</div>
        </li>);

  }
}


//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}