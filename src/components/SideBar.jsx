import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import CreateSolution from './CreateSolution.jsx';
import CreateProblem from './CreateProblem.jsx';
import SolutionContainer from './SolutionContainer.jsx';
import SuggestionContainer from './SuggestionContainer.jsx';
import QuestionContainer from './QuestionContainer.jsx';
import SideBarMenu from './SideBarMenu.jsx';
import SideBarMore from './SideBarMore.jsx';
import AnswerContainer from './AnswerContainer';


export default class SideBar extends React.Component {
   render() {
      return (
          <div>
          <SideBarMenu />
          <AnswerContainer />
          {this.props.children}
          </div>
      );
   }
}
