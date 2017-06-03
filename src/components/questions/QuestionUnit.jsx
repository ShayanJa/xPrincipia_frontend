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
            alert("I'm sorry, you've already voted on a question.")
        })
    }
  
       if (question.Username === cookie.load('userName')) {
           return (
        <li key={question.ID} id="questionUnit"> 
				<div id="questionContent">
					<div id="questionAdder">Q: {question.Username}</div>
                	<div id="questionText">{question.Description}</div>
				</div>
                {/*<div id="flagContainer">*/}
                    <Link to={`/problem/${question.TypeID}/question/${question.ID}/edit`}>
                        <div id="editSBButton">
                            Edit
                        </div>
                    </Link>
                    <Link to={`/problem/${question.TypeID}/question/${question.ID}/delete`}>
                        <div id="deleteSBButton">
                            Delete
                        </div>
                    </Link>
                {/*</div>*/}
				<button type="button" id="questionVote" onClick={submitVote}>Vote<br />{floatToDecimal(question.PercentRank)}</button>
                <Link to={`/problem/${question.TypeID}/question/${question.ID}/answers`} activeClassName="activeBlue">
                    <button type="button" id="questionAnswers">Answers</button>
                </Link>
        <br/><br/> 
        </li>);

    } else {
    return (
        <li key={question.ID} id="questionUnit"> 
				<div id="questionContent">
					<div id="questionAdder">Q: {question.Username}</div>
                	<div id="questionText">{question.Description}</div>
				</div>
                {/*<div id="flagContainer">*/}
                    <Link to={`/problem/${question.TypeID}/question/${question.ID}/flag`}>
                        <div id="flagSBButton">
                            {/*<img src={require('.../src/assets/delete.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />*/}
                            Flag
                        </div>
                    </Link>
                {/*</div>*/}
				<button type="button" id="questionVote" onClick={submitVote}>Vote<br />{floatToDecimal(question.PercentRank)}</button>
                <Link to={`/problem/${question.TypeID}/question/${question.ID}/answers`} activeClassName="activeBlue">
                    <button type="button" id="questionAnswers">Answers</button>
                </Link>
        <br/><br/> 
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
};