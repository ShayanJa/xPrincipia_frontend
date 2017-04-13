import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';


export default class SuggestionUnit extends React.Component {

  submitVote() {
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 1,
           TypeID: this.state.suggestionInfo.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("You've already voted on a question.")
        })
  }

	render() {
		return (
	    <div>
			<ul> {this.props.suggestions.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(suggestion) {
  
    return (
       <li key={suggestion.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">{suggestion.Username}</div>
                	<div id="suggestionText">{suggestion.Description}</div>
				</div>
				<button type="button" id="suggestionVote">Vote<br />{floatToDecimal(suggestion.PercentRank)}</button>   
            <br /><br /> 
        </li>)

  }
}

//convert float to Decimal
function floatToDecimal(float) {
	console.log(float)
	return Math.round(float*100)+'%';
}