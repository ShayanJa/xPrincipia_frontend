import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../config.js'

export default class FeedbackForm extends React.Component {
constructor(){
  super();

  this.state= {
    feedback: '',
  }

  this.postFeedback = this.postFeedback.bind(this);
};

postFeedback() {
  //Read field items into component state
this.state.feedback = document.getElementById('addSuggestion').value


 axios.post( Config.API + '/auth/feedback/create', {
    username: cookie.load('userName'),
    description : this.state.feedback,
  })
  .then(function (result) {
    alert("Thanks for the Feedback! We will use this info to improve your experience in the future")
    document.location = window.location.pathname 
  })
  .catch(function (error) {
    alert("I'm sorry there was a problem with your request")
  });

  
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
                         <input type="button" value="Submit" onClick={this.postFeedback} id="addSuggestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
