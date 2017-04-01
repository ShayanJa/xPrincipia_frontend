import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'min-jquery'

export default class AnswerForm extends React.Component {

constructor(){
  super();

  this.state= {
    answer: '',
  }

  this.postAnswer = this.postAnswer.bind(this);
};

postLogin() {
  //Read field items into component state
  this.state.answer = document.getElementById('answerTextArea').value

// Ajax post solution request
$.ajax({
  crossDomain: 'true',
  type: 'POST',
  headers: {'Content-Type' : 'application/json'},
  url: 'http://localhost:10000/problem/answers',
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
        <form action="http://www.xprincipia.com/answer.php" method="post" id="answerForm">
            <fieldset>
                <legend>Answer</legend>
                     <textarea name="answerText" required="required" id="answerTextArea"></textarea>
                     <br />
                     <input type="submit" value="Add" id="addAnswer"/>
            </fieldset>
        </form>
      </div>

      );
   }
}
