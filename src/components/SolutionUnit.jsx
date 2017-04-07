import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class SolutionUnit extends React.Component {
	constructor(props){
        super(props);
	}
	render() {
		return (
	    <div>
			<ul> {this.props.solutions.map(this.renderItem)} </ul>     
	    </div>

		);
	}

	renderItem(solution) {

    return (
<<<<<<< HEAD

        <li key={solution.ID}>
	        	<Link to={{pathname: '/solutions/'+solution.ID }}>
							<div id="solutionUnitTitle">
								<div id="percent">70%</div>
								<div id="unitTitle">{solution.Title}</div>
							</div>
							<div id="solutionUnitSummary">
								{solution.Summary}
							</div>
						</Link>

        <li key={solution.ID} id="solutionUnit">
        	<Link to={{pathname: '/solutions/'+solution.ID }} >
=======
        <li key={solution.ID}>
			<div id="solutionUnit">
			<Link to={{pathname: '/solutions/'+solution.ID }}>
>>>>>>> integratingAPICALLS
				<div id="solutionUnitTitle">
					<div id="percent">70%</div>
					<div id="unitTitle">{solution.Title}</div>
				</div>
				<div id="solutionUnitSummary">
					{solution.Summary}
				</div>
			</Link>
<<<<<<< HEAD


	        <br /><br />
        </li>
			);
=======
			</div>
		<br ></br>
        </li>);
>>>>>>> integratingAPICALLS
  }
}
