import React from 'react';
import ReactDOM from 'react-dom';

export default class Search extends React.Component {
   render() {
      return (
      <div id="searchComponent">
        <div id="searchHeader">

          <form action="http://www.xprincipia.com/search.php" method="get" id="exploreForm">
              <input type="search" name="search"
                  placeholder="Explore" id="exploreInput" autofocus/>
              <input type="submit" value="Go" id="submitExplore" />
          </form>

          <a href="return?"><div>Return</div></a>
        </div>
      </div>
      );
   }
}
