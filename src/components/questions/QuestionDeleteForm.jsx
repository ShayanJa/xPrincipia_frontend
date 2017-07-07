import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class QuestionDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    question: '',
  }

    this.deleteQuestion = this.deleteQuestion.bind(this);
  };

deleteQuestion() {
  
//Delete question
      var self = this
      axios.delete('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/questions/delete?id='+this.props.params.questID, {
        params: {
          id: this.props.params.questID,
          username: cookie.load('userName')
        }
      })
      .then(function (result) {
        document.location = '/problem/'+ self.props.params.probID + '/questions'
      })
      .catch(function (error) {
        alert("I'm sorry, there was a problem with your request.")
      });
    }
   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend>Delete Question</legend>
                         <div>Are you sure you would like to delete this question?</div>
                         <br />
                          <div onClick={this.deleteQuestion} id="deleteButton">Delete</div>
                         <Link to={`/problem/${this.props.params.probID}/questions`}>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}


