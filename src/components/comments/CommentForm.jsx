import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

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
axios.post( Config.API + '/auth/comments/create', {
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
            <fieldset id="greenBorder">
                <legend>Comments</legend>
                     <textarea name="answerText" required="required" id="commentTextArea" placeholder="Discuss this suggestion or view the current discussion of your peers. " autoFocus ></textarea>
                     <input type="button" value="Add" onClick={this.postComment} id="addAnswerGreen"/>
            </fieldset>
        </form>
      </div>

      );
   }
}