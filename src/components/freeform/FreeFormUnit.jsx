import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


export default class FreeFormUnit extends React.Component {
    constructor(props){
        super(props);
         this.renderItem = this.renderItem.bind(this)
    };
  

	render() {
		return (
	    <div>
			<ul> {this.props.freeForms.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(freeForm) {

       function  submitVote() {
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 3,
           TypeID: freeForm.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a comment.");
        })
  }
  
       if (freeForm.Username === cookie.load('userName')) {
           return (
       <li key={freeForm.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">S: {freeForm.Username}</div>
                	<div id="suggestionText">{freeForm.Description}</div>
				</div>
                    <Link to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/edit`}>
                        <div id="editSBButton">
                            Edit
                        </div>
                    </Link>
                    <Link to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/delete`}>
                        <div id="deleteSBButton">
                            Delete
                        </div>
                    </Link>
				<button type="button" onClick={submitVote} id="suggestionVote">Vote<br />{floatToDecimal(freeForm.PercentRank)}</button> 
                <Link  to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link> 
            <br /><br /> 
        </li>);

    } else {
    return (
       <li key={freeForm.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">S: {freeForm.Username}</div>
                	<div id="suggestionText">{freeForm.Description}</div>
				</div>
                    <Link to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/flag`}>
                        <div id="flagSBButton">
                            {/*<img src={require('.../src/assets/delete.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />*/}
                            Flag
                        </div>
                    </Link>
				<button type="button" onClick={submitVote} id="suggestionVote">Vote<br />{floatToDecimal(freeForm.PercentRank)}</button> 
                <Link  to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>  
            <br /><br /> 
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}