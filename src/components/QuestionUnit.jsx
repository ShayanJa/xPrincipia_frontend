import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';

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
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 2,
           TypeID: question.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("You've already voted on a question.")
        })
    }
  
    return (
        <li key={question.ID} id="questionUnit"> 
				<div id="questionContent">
					<div id="questionAdder">Q: {question.Username}</div>
                	<div id="questionText">{question.Description}</div>
				</div>
				<button type="button" id="questionVote" onClick={submitVote}>Vote<br />{floatToDecimal(question.PercentRank)}</button>
            <Link to={`/problem/${question.TypeID}/question/${question.ID}/answers`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Answers</button></Link>
        <br/><br/> 
        </li>)
  }
}

//convert float to Decimal
function floatToDecimal(float) {
	console.log(float)
	return Math.round(float*100)+'%';
}
