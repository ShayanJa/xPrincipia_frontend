import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

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
 axios.post('http://ec2-13-58-19-50.us-east-2.compute.amazonaws.com/auth/suggestions/create', {
    username: cookie.load('userName'),
    type:'1',
    typeID: this.props.probID,
    description : this.state.suggestion,
  })
  .then(function (result) {
    
  })
  .catch(function (error) {
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
