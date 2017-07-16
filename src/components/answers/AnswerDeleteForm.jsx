import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class AnswerDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    answer: '',
  }

    this.deleteAnswer = this.deleteAnswer.bind(this);
  };

deleteAnswer() {
      var self = this
      axios.delete( Config.API + '/auth/answers/delete?id='+this.props.params.answerID, {
        params: {
          id: this.props.params.questID,
          username: cookie.load('userName')
        }
    })
      .then(function (result) {
        document.location = '/problem/'+ self.props.params.probID + '/question/' + self.props.params.questID + '/answers'
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
                    <legend>Delete Answer</legend>
                         <div>Are you sure you would like to delete this answer?</div>
                         <br />
                         <div onClick={this.deleteAnswer} id="deleteButton">Delete</div>
                         <Link to={`/problem/${this.props.params.probID}/question/${this.props.params.questID}/answers`}>
                            <div id="returnButton">Exit</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
