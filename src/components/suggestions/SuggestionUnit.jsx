import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


export default class SuggestionUnit extends React.Component {
    constructor(props){
        super(props);
         this.renderItem = this.renderItem.bind(this)
    };
  

	render() {
		return (
	    <div>
			<ul> {this.props.suggestions.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(suggestion) {

       function  submitVote() {
       axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/vote/create', {
           Type: 3,
           TypeID: suggestion.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a suggestion.");
        })
  }
  
       if (suggestion.Username === cookie.load('userName')) {
           return (
       <li key={suggestion.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">S: {suggestion.Username}</div>
                	<div id="suggestionText">{suggestion.Description}</div>
				</div>
                    <Link to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/edit`}>
                        <div id="editSBButton">
                            Edit
                        </div>
                    </Link>
                    <Link to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/delete`}>
                        <div id="deleteSBButton">
                            Delete
                        </div>
                    </Link>
				<button type="button" onClick={submitVote} id="suggestionVote">Vote<br />{floatToDecimal(suggestion.PercentRank)}</button> 
                <Link  to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>  {/* to={`/problem/${suggestion.TypeID}/${suggestion.ID}/comments`} */}
            <br /><br /> 
        </li>);

    } else {
    return (
       <li key={suggestion.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">S: {suggestion.Username}</div>
                	<div id="suggestionText">{suggestion.Description}</div>
				</div>
                    <Link to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/flag`}>
                        <div id="flagSBButton">
                            {/*<img src={require('.../src/assets/delete.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />*/}
                            Flag
                        </div>
                    </Link>
				<button type="button" onClick={submitVote} id="suggestionVote">Vote<br />{floatToDecimal(suggestion.PercentRank)}</button> 
                <Link  to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>  {/* to={`/problem/${suggestion.TypeID}/${suggestion.ID}/comments`} */}
            <br /><br /> 
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}