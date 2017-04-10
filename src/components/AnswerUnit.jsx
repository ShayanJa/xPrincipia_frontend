import React from 'react';

export default class AnswerUnit extends React.Component {

	render() {
		return (
	    <div>
			<ul> {this.props.answers.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}

   renderItem(answer) {
      return (
        <li key={answer.ID} id="answerUnit">
            <div id="answerContent">
                <div id="answerAdder">A: {answer.Username}</div>
                <div id="answerText">{answer.Description}</div>
            </div>
            <button type="button" id="answerVote">Vote</button>
        </li>

      );
   }
}
