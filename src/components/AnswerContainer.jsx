import React from 'react';
import ReactDOM from 'react-dom';
import QuestionUnit from './QuestionUnit.jsx';
import AnswerUnit from './AnswerUnit.jsx';
import AnswerForm from './AnswerForm.jsx';
import SideBarMore from './SideBarMore.jsx';

export default class AnswerContainer extends React.Component {
   render() {
      return (
        <div id="answerContainer">
            <AnswerForm />
            <QuestionUnit />
            <AnswerUnit />
            <AnswerUnit />
            <AnswerUnit />
            <AnswerUnit />
            <SideBarMore />
        </div>
      );
   }
}
