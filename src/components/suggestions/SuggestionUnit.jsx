import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

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
       axios.post( Config.API + '/auth/vote/create', {
           Type: 3,
           TypeID: suggestion.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("You may only vote on a suggestion once.");
        })
  }
  
       if (suggestion.Username === cookie.load('userName')) {
           return (
       <li key={suggestion.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(suggestion.PercentRank)}</span>
					    {suggestion.Username}
                    </div>
                    <div id="suggestionText">
                        {suggestion.Description}
                    </div>
				</div>
                <Link to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/delete`}>
                    <div id="deleteSBButton">
                        <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                    </div>
                </Link>
                <Link to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/edit`}>
                    <div id="editSBButton">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                    </div>
                </Link>
                <Link  to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/comments`} activeClassName="activeBlue">
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>
                </Link>
                <button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button> 
                <br /><br /> 
        </li>);

    } else {
    return (
       <li key={suggestion.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(suggestion.PercentRank)}</span>
					    {suggestion.Username}
                    </div>
                    <div id="suggestionText">
                        {suggestion.Description}
                    </div>
				</div>
                    {/*<Link to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/flag`}>
                        <div id="flagSBButton">
                            <img src={require('.../src/assets/flag.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />
                            Flag
                        </div>
                    </Link>*/}
                <Link  to={`/problem/${suggestion.TypeID}/suggestion/${suggestion.ID}/comments`} activeClassName="activeBlue">
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>
                </Link>
                <button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button> 
                <br /><br /> 
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}