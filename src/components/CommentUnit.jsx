import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';


export default class CommentUnit extends React.Component {

  

	render() {
		return (
	    <div>
			<ul> {this.props.comments.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}

   renderItem(comment) {
       function  submitVote() {
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 5,
           TypeID: comment.ID,
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
        <li key={comment.ID} id="answerUnit">
            <div id="answerContent">
                <div id="answerAdder">C: {comment.Username}</div>
                <div id="answerText">{comment.Description}</div>
            </div>
            <button type="button" onClick={submitVote} id="answerVote">Vote<br />{floatToDecimal(comment.PercentRank)}</button>
        </li>

      );
   }
}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}
