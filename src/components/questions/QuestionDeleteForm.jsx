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

    this.postQuestion = this.postQuestion.bind(this);
  };

postQuestion() {
  //Read field items into component state
  this.state.question = document.getElementById('questionTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props

      axios.put('http://localhost:10000/auth/questions/update?id='+this.props.params.questID, {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.question,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
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
                         <div onClick={this.postQuestion} id="deleteButton">Delete</div>
                         <Link to='/problem/${question.TypeID}/questions'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
