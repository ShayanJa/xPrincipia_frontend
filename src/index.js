import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Create from './components/Create.jsx'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import './assets/index.css';

ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {App} />
      <Route path = "/create" component = {Create} />
    </Route>
      
   </Router>,
  document.getElementById('root')
);

