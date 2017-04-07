import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'min-jquery'

export default class QuestionForm extends React.Component {

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

// Ajax post question request
$.ajax({
  crossDomain: 'true',
  type: 'POST',
  headers: {'Content-Type' : 'application/json'},
  url: 'http://localhost:10000/questions/create',
  processData: false,
  data: JSON.stringify({
    'Description' : this.state.question,
  }),
  success: function(result){
    console.log(result)

    alert('Your question has been asked.')
  },
  error: function(result){
    console.log(result)

    alert('Please try again.')
  },

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
