import React from 'react';

export default class SearchBox extends React.Component {
   render() {
      return (

        <div id="searchBox">
          <form action="http://www.xprincipia.com/search.php" method="get" id="exploreForm">
              <input type="search" name="search"
                  placeholder="Explore" id="exploreInput" autofocus/>
              <input type="submit" value="Go" id="submitExplore" />
          </form>
          <div id="searchElements">
              <div id="searchUnit">
                  <div id="searchTitle">
                      Global workspace model contrasting natural selection and higher consciousness
                  </div>
                  <div id="searchSummary">
                      Conscious cognitive content is locally available for diverse cognitive processes including attention, evaluation, memory, and verbal report.
                  </div>
              </div>
          </div>
          <div id="moreSearchButton">
                More
          </div>
        </div>

      );
   }
}
