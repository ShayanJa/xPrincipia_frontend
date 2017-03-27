import React from 'react';
import ReactDOM from 'react-dom';

export default class Answer extends React.Component {
   render() {
      return (
        <div id="answerComponent">
              <form action="http://www.xprincipia.com/answer.php" method="post" id="answerForm">
                  <fieldset>
                      <legend>Answer</legend>
                           <textarea name="answerText" required="required"></textarea>
                           <br />
                           <input type="submit" value="Add" id="addAnswer"/>
                  </fieldset>
              </form>
              <div id="sidebarElements">
                <div id="questionSection">
                    <div id="questionUnit">
                        <div id="questionContent">
                            <div id="questionAdder">Ben Francis</div>
                            <div id="questionText">How can you explain the dramatic increase in complexity that arises with abiogenesis?</div>
                        </div>
                        <button type="button" id="questionVote">Vote</button>
                        <button type="button" id="questionAnswers">Answers</button>

                    </div>
                </div>
                <div id="answerSection">
                    <div id="answerUnit">
                        <div id="answerContent">
                            <div id="answerAdder">Tom Frawley</div>
                            <div id="answerText">By noting that entropy is actually increased through abiogenesis, in addition to the complexity. The history of complexity increase in the universe is the dependent variable of a parabolic curve where entropy always increases as the independent variable. In summary, both increase.</div>
                        </div>
                        <button type="button" id="answerVote">Vote</button>
                    </div>
                </div>
                <div id="moreAnswerButton">
                      More
                </div>
              </div>
          </div>

      );
   }
}
