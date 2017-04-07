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

        <li key={problem.ID} id="subProblemUnit">
        	<Link to={`/problem/${problem.ID}/subproblems`} >
			
				<div id="subProblemTitle">
					<div id="percent">70%</div>
					<div id="unitTitle">{problem.Title}</div>
				</div>
				<div id="subProblemSummary">
					{problem.Summary}
				</div>
			</Link>

        <br ></br> 

        </li>)
	
  }
}
