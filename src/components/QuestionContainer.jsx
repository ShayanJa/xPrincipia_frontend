import React from 'react';
import ReactDOM from 'react-dom';
import QuestionUnit from './QuestionUnit.jsx';
import QuestionForm from './QuestionForm.jsx';

export default class QuestionContainer extends React.Component {
   render() {
      return (
        <div id="questionContainer">
            <QuestionForm />
            <QuestionUnit />
            <QuestionUnit />
            <QuestionUnit />
            <QuestionUnit />
            <QuestionUnit />
        </div>
      );
   }
}
