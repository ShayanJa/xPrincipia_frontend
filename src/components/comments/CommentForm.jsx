import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

export default class CommentForm extends React.Component {

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
axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/comments/create', {
  type:'5',
// Questions has "probID here"
  suggestionID: this.props.params.suggID,
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
                <legend>Comments</legend>
                     <textarea name="answerText" required="required" id="commentTextArea"></textarea>
                     <br />
                     <input type="button" value="Add" onClick={this.postComment} id="addAnswer"/>
            </fieldset>
        </form>
      </div>

      );
   }
}