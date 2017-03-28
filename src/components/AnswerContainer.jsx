import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

export default class QuestionContainer extends React.Component {
   render() {
      return (
        <div id="questionSection">
            <Answer />
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
      );
   }
}
