import React from 'react';
import $ from 'min-jquery'

export default class AnswerForm extends React.Component {

constructor(){
  super();

  this.state= {
    answer: '',
  }

  this.postAnswer = this.postAnswer.bind(this);
};

postAnswer() {
  //Read field items into component state
  this.state.answer = document.getElementById('answerTextArea').value

// Ajax post answer request
$.ajax({
  crossDomain: 'true',
  type: 'POST',
  headers: {'Content-Type' : 'application/json'},
  url: 'http://ec2-13-58-19-50.us-east-2.compute.amazonaws.com/problem/answers',
  processData: false,
  data: JSON.stringify({
    'answer' : this.state.answer,
  }),
  success: function(result){
    console.log(result)

    alert('Your answer has been added.')
  },
  error: function(result){
    console.log(result)

    alert('Please try again.')
  },

  });
}

   render() {
      return (

      <div id="answerFormComponent">
        <form id="answerForm">
            <fieldset>
                <legend>Answer</legend>
                     <textarea name="answerText" required="required" id="answerTextArea"></textarea>
                     <br />
                     <input type="submit" value="Add" onClick={this.postAnswer} id="addAnswer"/>
            </fieldset>
        </form>
      </div>

      );
   }
}
