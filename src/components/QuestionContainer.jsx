import React from 'react';
import ReactDOM from 'react-dom';
import QuestionUnit from './QuestionUnit.jsx';

export default class QuestionContainer extends React.Component {
   render() {
      return (
        <div id="questionContainer">
            <QuestionUnit />
            <QuestionUnit />
            <QuestionUnit />
            <QuestionUnit />
            <QuestionUnit />
        </div>
      );
   }
}
