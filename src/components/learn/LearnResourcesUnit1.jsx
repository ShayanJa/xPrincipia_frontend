import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


export default class LearnResourcesUnit1 extends React.Component {
    constructor(props){
        super(props);
         this.renderItem = this.renderItem.bind(this)
    };
  

	render() {
		return (
	    <div>
			<ul> {this.props.resources.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(resource) {

       function  submitVote() {
       axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/vote/create', {
           Type: 3,
           TypeID: resource.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a learning resource.");
        })
  }
  
    return (
       <li key={resource.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">{resource.Username}</div>
                	<div id="suggestionText">{resource.Description}</div>
				</div>
				<button type="button" onClick={submitVote} id="suggestionVote">Vote<br />{floatToDecimal(resource.PercentRank)}</button> 
                <Link  to={`/problem/${resource.TypeID}/learnresources/${resource.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>
            <br /><br /> 
        </li>)

  }
}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}