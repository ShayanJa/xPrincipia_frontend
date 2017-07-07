import React from 'react';
import { Link } from 'react-router';

export default class VersionsUnit extends React.Component {

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
			<Link to={`/fullsolution/${solution.ProblemID}/${solution.solutionID}/fullversion`}>
				<div id="versionUnit">
					<div id="versionUnitTitle">
						<div id="versionPercent">{floatToDecimal(solution.PercentRank)}</div>
						<div>
							<div id="versionNumber">v.112</div>
							<div id="changesFrom">Changes from <span id="versionFrom">v.90</span></div>
						</div>
					</div>
					{/*<div id="solutionUnitSummary">
						{solution.Summary}
					</div>*/}
				</div>
			</Link>
        </li>);

  }
}


//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}