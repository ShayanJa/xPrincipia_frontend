import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'min-jquery'

export default class WelcomeForm extends React.Component {
   render() {
      return (

      <div id="welcomeFormComponent">
        <form action="http://www.xprincipia.com/search.php" method="get" id="exploreWelcomeForm">
            <input type="search" name="search"
                placeholder="Select or search a problem to begin" id="exploreInput" autofocus/>
            <input type="submit" value="Go" id="submitExplore" />
        </form>
      </div>

      );
   }
}
