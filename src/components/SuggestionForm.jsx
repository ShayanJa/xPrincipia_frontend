import React from 'react';
import $ from 'min-jquery'

export default class SuggestionForm extends React.Component {

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

// Ajax post suggestion request
$.ajax({
  crossDomain: 'true',
  type: 'POST',
  headers: {'Content-Type' : 'application/json'},
  url: 'http://localhost:10000/suggestions/create',
  processData: false,
  data: JSON.stringify({
    'type':'1',
    'typeID': this.props.probID,
    'Description' : this.state.suggestion,
  }),
  success: function(result){
    console.log("it works " + this.props.probID)
    
  },
  error: function(result){
      console.log("it doesn't works " + this.props.probID)
  },

  });
}

   render() {
      return (

      <div id="suggestionFormComponent">
            <form id="suggestionForm">
                <fieldset>
                    <legend>Suggestion</legend>
                         <textarea name="suggestionText" required="required" id="suggestionTextArea" autoFocus ></textarea>
                         <br />
                         <input type="submit" value="Add" onClick={this.postSuggestion} id="addSuggestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
