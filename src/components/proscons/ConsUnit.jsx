import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class ConsUnit extends React.Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this)
    };
  

	render() {
		return (
	    <div>
			<ul> {this.props.cons.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(con) {
        var self = this;
       function  submitVote() {
       axios.post( Config.API + '/auth/vote/create', {
           Type: 3,
           TypeID: con.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a con.");
        })
  }
  
       if (con.Username === cookie.load('userName')) {
           return (
       <li key={con.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(con.PercentRank)}</span>
					    {con.Username}
                    </div>
                    <div id="suggestionText">
                        {con.Description}
                    </div>
				</div>
                    <Link to={`/problem/${con.ProblemID}/${con.TypeID}/cons/${con.ID}/delete`}>
                        <div id="deleteSBButton">
                            <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                        </div>
                    </Link>
                    <Link to={`/problem/${con.ProblemID}/${con.TypeID}/cons/${con.ID}/edit`}>
                        <div id="editSBButtonAnswer">
                            <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                        </div>
                    </Link>
                {/*<Link to={`/conblem/${con.TypeID}/cons/${con.ID}/comments`}>
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>*/}
                <button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button>             
            <br /><br /> 
        </li>);
    } else {
    return (
       <li key={con.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(con.PercentRank)}</span>
					    {con.Username}
                    </div>
                    <div id="suggestionText">
                        {con.Description}
                    </div>
				</div>
                {/*<Link to={`/problem/${con.TypeID}/cons/${con.ID}/flag`}>
                        <div id="flagSBButton">
                            <img src={require('.../src/assets/delete.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />
                            Flag
                        </div>
                </Link>*/}
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