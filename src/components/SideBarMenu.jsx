import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Create from './Create.jsx';
import SolutionContainer from './SolutionContainer.jsx';
import SuggestionContainer from './SuggestionContainer.jsx';
import CommentContainer from './CommentContainer.jsx';


export default class SideBarMenu extends React.Component {
   render() {
      return (
                <div id="sidebar">
                <Link to='home/sidebar/create'><button type="button" id="createButton">Create</button></Link>
                  <div id="sidebarMenu">
                      <div id="solveMenu">
                          <div id="solveTitle">Solve</div>
                                <Link to='home/sidebar/solve'><div id="solutionsButton">Solutions</div></Link>
                                <Link to='home/sidebar/subproblems'><div id="subproblemButton">Sub Problems</div></Link>
                          </div>
                      <div id="developMenu">
                              <div id="developTitle">Develop</div>
                                <Link to='home/sidebar/comment'><div id="commentsButton">Comments</div></Link>
                                <Link to='home/sidebar/suggest'><div id="suggestionsButton">Suggestions</div></Link>
                              </div>
                      </div>
                    </div>

      );
   }
}
