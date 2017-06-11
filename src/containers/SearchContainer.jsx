import React from 'react';
import SearchForm from '../components/SearchForm.jsx';
// import SearchUnit from '../components/SearchUnit.jsx';
import ProfileUnit from '../components/profile/ProfileUnit.jsx';
import SearchMore from '../components/SideBarMore.jsx';

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
