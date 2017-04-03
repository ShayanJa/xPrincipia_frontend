import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm.jsx';
import SearchUnit from './SearchUnit.jsx';
import ProfileUnit from './ProfileUnit.jsx';
import SearchMore from './SideBarMore.jsx';

export default class SearchContainer extends React.Component {
   render() {
      return (
        <div id="searchBox">
            <SearchForm />
            <div id="searchElements">
              <ProfileUnit />
              <ProfileUnit />
              <ProfileUnit />
              <ProfileUnit />
              <ProfileUnit />
              <SearchMore />
            </div>
        </div>
      );
   }
}
