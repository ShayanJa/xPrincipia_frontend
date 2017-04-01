import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'min-jquery'

export default class SuggestionForm extends React.Component {
   render() {
      return (

      <div id="suggestionFormComponent">
            <form action="http://www.xprincipia.com/suggestion.php" method="post" id="suggestionForm">
                <fieldset>
                    <legend>Suggestion</legend>
                         <textarea name="suggestionText" required="required" id="suggestionTextArea"></textarea>
                         <br />
                         <input type="submit" value="Add" id="addSuggestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
