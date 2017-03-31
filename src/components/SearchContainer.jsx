import React from 'react';
import ReactDOM from 'react-dom';
import SearchUnit from './SearchUnit.jsx';

export default class SearchContainer extends React.Component {
   render() {
      return (
        <div id="searchContainer">
            <SearchUnit />
            <SearchUnit />
            <SearchUnit />
            <SearchUnit />
            <SearchUnit />
        </div>
      );
   }
}
