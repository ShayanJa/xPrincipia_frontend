import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

export default class FeedbackForm extends React.Component {

constructor(){
  super();

  this.state= {
    suggestion: '',
  }

  this.postSuggestion = this.postSuggestion.bind(this);
};

postSuggestion() {
  //Read field items into component state
this.state.suggestion = document.getElementById('suggestionTextArea').value

if(this.props.solutionID){
 axios.post('http://localhost:10000/auth/suggestions/create', {
    username: cookie.load('userName'),
    type:'1',
    typeID: this.props.solutionID,
    description : this.state.suggestion,
  })
  .then(function (result) {
    document.location = window.location.pathname 
  })
  .catch(function (error) {
    alert("I'm sorry there was a problem with your request")
  });
} 
  //else post to problem
  //probID will be used
    else {
      axios.post('http://localhost:10000/auth/suggestions/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.suggestion,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
    }
}


   render() {
      return (

      <div id="suggestionFormComponent">
             <div id="feedbackExplanation">
                Thank you for your feedback.
            </div>
            <form id="suggestionForm">
                <fieldset id="feedbackFieldset">
                    <legend>User Feedback</legend>
                         <textarea name="feedbackText" required="required" id="feedbackTextArea" autoFocus ></textarea>
                         <br />
                         <input type="button" value="Submit" onClick={this.postSuggestion} id="addSuggestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
