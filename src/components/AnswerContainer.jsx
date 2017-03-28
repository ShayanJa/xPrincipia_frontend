import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

export default class AnswerContainer extends React.Component {
   render() {
      return (
        <div id="answerContainer">
            <QuestionUnit />
            <AnswerUnit />
            <AnswerUnit />
            <AnswerUnit />
            <AnswerUnit />
        </div>
      );
   }
}
