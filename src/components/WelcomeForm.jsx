import React from 'react';

export default class WelcomeForm extends React.Component {
   render() {
      return (

      <div id="welcomeFormComponent">
        <form action="http://www.xprincipia.com/search.php" method="get" id="exploreWelcomeForm">
            <input type="search" name="search"
                placeholder="Select or search a problem" id="exploreInput" autoFocus/>
            <input type="submit" value="Go" id="submitExplore" />
        </form>
      </div>

      );
   }
}