import React from 'react';
import $ from 'min-jquery';
import axios from 'axios';
import cookie from 'react-cookie'

export default class QuestionForm extends React.Component {

  constructor(){
  super();

  this.state= {
    question: '',
  }

    this.postQuestion = this.postQuestion.bind(this);
  };

  postQuestion() {
  var self = this
  //Read field items into component state
  this.state.question = document.getElementById('questionTextArea').value
  
  axios.post('http://localhost:10000/auth/questions/create', {
    type:'1',
    typeID: this.props.probID,
    username: cookie.load('userName'),
    description : this.state.question,
  })
  .then(function (result) {
    
  })
  .catch(function (error) {
    });
  }



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend>Questions</legend>
                         <textarea name="questionText" required="required" id="questionTextArea" autoFocus ></textarea>
                         <br />
                         <input type="submit" value="Ask" onClick={this.postQuestion} id="askquestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
