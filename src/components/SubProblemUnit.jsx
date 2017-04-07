import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class SubProblemUnit extends React.Component {
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
        <li key={problem.ID}>
			<div id="subProblemUnit">
				<Link to={{pathname: '/problem/'+problem.ID }} >
					<div id="subProblemTitle">
						<div id="unitTitle">{problem.Title}</div>
						<button type="button" id="problemVote">Vote</button>
					</div>
					<div id="subProblemSummary">{problem.Summary}</div>
				</Link>
			</div>
        </li>)
  }
}
