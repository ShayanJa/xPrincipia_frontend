import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';

export default class AnswerUnit extends React.Component {

constructor(props){
     super(props);

        this.renderItem = this.renderItem.bind(this)
        // this.submitVote = this.submitVote.bind(this)

    };
	render() {
		return (
	    <div>
			<ul> {this.props.answers.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}

   renderItem(answer) {
       function submitVote() {
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 4,
           TypeID: answer.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("You may vote for only one answer per question.")
        })
    }
    if (answer.Username === cookie.load('userName')) {
        return (
        <li key={answer.ID} id="answerUnit">
            <div id="answerContent">
                <div id="answerAdder">A: {answer.Username}</div>
                <div id="answerText">{answer.Description}</div>
            </div>
                <Link to={`/problem/${this.props.probID}/question/${this.props.questID}/answer/${answer.ID}/edit`}>
                    <div id="editSBButton">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="11" height="11" alt="Edit Button" />
                    </div>
                </Link>
                <Link to={`/problem/${this.props.probID}/question/${this.props.questID}/answer/${answer.TypeID}/delete`}>
                    <div id="deleteSBButton">
                        Delete
                    </div>
                </Link>
            <button type="button" onClick={submitVote} id="answerVote">Vote<br />{floatToDecimal(answer.PercentRank)}</button>
        </li>);

    } else {
    return (
        <li key={answer.ID} id="answerUnit">
            <div id="answerContent">
                <div id="answerAdder">A: {answer.Username}</div>
                <div id="answerText">{answer.Description}</div>
            </div>
            <button type="button" onClick={submitVote} id="answerVote">Vote<br />{floatToDecimal(answer.PercentRank)}</button>
        </li>);
   }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}
