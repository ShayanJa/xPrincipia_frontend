import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchForm extends React.Component {

   handle(e) {
     if(e.keyCode === 13){
              // Ensures it is only this code that runs (enter is pressed), I'm not quite sure why this is here
              e.preventDefault();
              // Whatever we want to be done here
              alert("");
   }
 };

   render() {
      return (

        <div id="searchFormComponent">
          <form action="http://www.xprincipia.com/search.php" method="get" id="exploreForm">
              <input type="search" name="search"
                  placeholder="Explore" onkeypress="handle(event)" id="exploreInput" autoFocus/>
              <input type="submit" value="Go" id="submitExplore" />
          </form>
        </div>

      );
   }
}
