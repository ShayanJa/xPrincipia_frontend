import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class CommentDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    comment: '',
  }

    this.deleteComment = this.deleteComment.bind(this);
  };

deleteComment() {

////Delete comment
      var self = this
      axios.delete( Config.API + '/auth/comments/delete?id='+this.props.params.commentID, {
        params: {
          id: this.props.params.commentID,
          username: cookie.load('userName')
        }
    })
      .then(function (result) {
        // document.location = '/problem/'+ self.props.params.probID + '/suggestion/' + self.props.params.suggID + '/comments'
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry, there was a problem with your request. ")
      });
    }
   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset id="redFieldset">
                    <legend>Delete Comment</legend>
                         <div>Are you sure you would like to delete this comment?</div>
                         <br />
                         <div onClick={this.deleteComment} id="deleteButton">Delete</div>
                         <Link to={`/problem/${this.props.params.probID}/suggestion/${this.props.params.suggID}/comments`}>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
