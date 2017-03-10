import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Create from './components/Create.jsx'
import Solution from './components/Solution.jsx'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import './assets/index.css';

ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Solution} />
      <Route path = "/create" component = {Create} />
      <Route path = "/solution" component = {Solution} />
    </Route>
   </Router>,
  document.getElementById('root')
);