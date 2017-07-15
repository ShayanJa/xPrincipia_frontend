import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class QuestionUnit extends React.Component {
constructor(props){
     super(props);

        this.renderItem = this.renderItem.bind(this)
        // this.submitVote = this.submitVote.bind(this)

    };
  

	render() {
		return (
	    <div>
			<ul> {this.props.questions.map(this.renderItem)} </ul>	               
	    </div>
		);
	}
	renderItem(question) {
       function submitVote() {
       axios.post( Config.API + '/auth/vote/create', {
           Type: 2,
           TypeID: question.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("You may only vote on a question once.")
        })
    }
  
       if (question.Username === cookie.load('userName')) {
           return (
        <li key={question.ID} id="questionUnit"> 
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(question.PercentRank)}</span>
					    {question.Username}
                    </div>
                    <div id="suggestionText">
                        {question.Description}
                    </div>
				</div>
                <Link to={`/problem/${question.TypeID}/question/${question.ID}/delete`} >
                   <div id="deleteSBButton">
                        <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                    </div>
                </Link>
                <Link to={`/problem/${question.TypeID}/question/${question.ID}/edit`}>
                    <div id="editSBButton">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                    </div>
                </Link>
                <Link to={`/problem/${question.TypeID}/question/${question.ID}/answers`} activeClassName="activeGlow">
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>
                <button type="button" id="suggestionVote" onClick={submitVote}>
                    Vote
                </button>
                <br/><br/> 
                {this.props.children}
        </li>);

    } else {
    return (
        <li key={question.ID} id="questionUnit"> 
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(question.PercentRank)}</span>
					    {question.Username}
                    </div>
                    <div id="suggestionText">
                        {question.Description}
                    </div>
				</div>
                    {/*<Link to={`/problem/${question.TypeID}/question/${question.ID}/flag`}>
                        <div id="flagSBButton">
                            <img src={require('.../src/assets/flag.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />
                            Flag
                        </div>
                    </Link>*/}
                <Link to={`/problem/${question.TypeID}/question/${question.ID}/answers`} activeClassName="activeGlow">
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>
                <button type="button" id="suggestionVote" onClick={submitVote}>
                    Vote
                </button>
                <br/><br/> 
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
};
