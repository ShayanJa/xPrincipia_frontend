import React from 'react';
import ReactDOM from 'react-dom';
import QuestionUnit from '../components/QuestionUnit.jsx';
import AnswerUnit from '../components/AnswerUnit.jsx';
import AnswerForm from '../components/AnswerForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';

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
