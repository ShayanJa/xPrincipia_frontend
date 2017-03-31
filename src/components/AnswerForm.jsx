import React from 'react';
import ReactDOM from 'react-dom';

export default class AnswerForm extends React.Component {
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
