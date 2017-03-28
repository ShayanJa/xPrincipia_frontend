import React from 'react';
import ReactDOM from 'react-dom';

export default class SuggestionForm extends React.Component {
   render() {
      return (

      <div id="suggestionFormComponent">
            <form action="http://www.xprincipia.com/suggestion.php" method="post" id="suggestionForm">
                <fieldset>
                    <legend>Suggestion</legend>
                         <textarea name="suggestionText" required="required"></textarea>
                         <br />
                         <input type="submit" value="Add" id="addSuggestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
