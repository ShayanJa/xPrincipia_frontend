import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

export default class FreeFormForm extends React.Component {

constructor(){
  super();

  this.state= {
    comment: '',
  }

  this.postComment = this.postComment.bind(this);
};

postComment() {
  //Read field items into component state
  this.state.comment = document.getElementById('commentTextArea').value
// Ajax post comment request
axios.post('http://localhost:10000/auth/comments/create', {
  type:'5',
// Questions has "probID here"
  suggestionID: this.props.suggID,
  username: cookie.load('userName'),
  description : this.state.comment,
})
.then(function (result) {
  document.location = window.location.pathname 
})
.catch(function (error) {
  alert('Please try again');
  });
}



   render() {
      return (

      <div id="answerFormComponent">
        <form id="answerForm">
            <fieldset>
                <legend>FreeForm Discussion</legend>
                     <textarea name="answerText" required="required" id="commentTextArea"></textarea>
                     <br />
                     <input type="button" value="Add" onClick={this.postComment} id="addAnswer"/>
            </fieldset>
        </form>
      </div>

      );
   }
}