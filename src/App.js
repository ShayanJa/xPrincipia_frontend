import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import './assets/App.css';
import './assets/index.css';
import Header from './components/Header.jsx';
import Problem from './components/Problem.jsx';
import SideBar from './components/SideBar.jsx';
import Create from './components/Create.jsx';
import SolutionContainer from './components/SolutionContainer.jsx';
import CommentContainer from './components/CommentContainer.jsx';
import SubProblemContainer from './components/SubProblemContainer.jsx';
import SuggestionContainer from './components/SuggestionContainer.jsx';
import SideBarMenu from './components/SideBarMenu.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Problem />
      <div>
        <SideBarMenu />
        <Router history={hashHistory}>
          <Route path='/' component={SideBar}>
            <IndexRoute component={SolutionContainer} />
              <Route path='/create' component={Create} />
              <Route path='/solve' component={SolutionContainer} />
              <Route path='/comments' component={CommentContainer} />
              <Route path='/subproblems' component={SubProblemContainer} />
              <Route path='/suggestions' component={SuggestionContainer} />
          </Route>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
