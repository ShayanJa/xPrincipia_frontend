import React from 'react';
import { Link } from 'react-router';

export default class QuestionUnit extends React.Component {

	render() {
		return (
	    <div>
			<ul> {this.props.questions.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(question) {
  
    return (
        <li key={question.ID} id="questionUnit">
				<div id="questionContent">
					<div id="questionAdder">Q: {question.Username}</div>
                	<div id="questionText">{question.Description}</div>
				</div>
				<button type="button" id="questionVote">Vote</button>
            <Link to={`/problem/${question.TypeID}/${question.ID}/questions`}><button type="button" id="questionAnswers">Answers</button></Link>
        <br/><br/> 
        </li>)
  }
}

