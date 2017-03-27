import React from 'react';
import ReactDOM from 'react-dom';

export default class Create extends React.Component {
   render() {
      return (

      <div id="welcomeBox">
        <h1 id="welcomePrompt">Welcome to Xprincipia</h1>
        <form action="http://www.xprincipia.com/search.php" method="get" id="exploreForm">
            <input type="search" name="search"
                placeholder="Select or search a problem to begin" id="exploreInput" autofocus/>
            <input type="submit" value="Go" id="submitExplore" />
        </form>
        <div id="welcomeProblemsElements">
            <div id="welcomeProblemsUnit">
                <div id="welcomeProblemsHeader">
                    <div id="welcomeProblemsTag">Consciousness</div>
                    <div id="welcomeProblemsTitle">
                        Global workspace model contrasting natural selection and higher consciousness
                    </div>
                </div>
            </div>
        </div>
        <div id="moreButton">
              More
        </div>
      </div>

      );
   }
}
