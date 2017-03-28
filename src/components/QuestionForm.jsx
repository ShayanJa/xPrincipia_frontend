import React from 'react';
import ReactDOM from 'react-dom';

export default class QuestionForm extends React.Component {
   render() {
      return (

      <div id="questionFormComponent">
            <form action="http://www.xprincipia.com/question.php" method="post" id="questionForm">
                <fieldset>
                    <legend>Questions</legend>
                         <textarea name="questionText" required="required"></textarea>
                         <br />
                         <input type="submit" value="Ask" id="askquestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
