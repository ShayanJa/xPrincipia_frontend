import React from 'react';
import ReactDOM from 'react-dom';
import SearchUnit from './SearchUnit.jsx';
import SearchForm from './SearchForm.jsx'

export default class SearchContainer extends React.Component {
   render() {
      return (
        <div id="welcomeBox">
            <h1 id="welcomePrompt">Welcome to Xprincipia</h1>
            <SearchForm />
            <SearchUnit />
            <SearchUnit />
            <SearchUnit />
            <SearchUnit />
            <SearchUnit />
        </div>
      );
   }
}
