import React from 'react';

export default class TutorialWelcomeContent extends React.Component {
   render() {
      return (
        <div>
            {/*<Link to="/tutorialwelcome">
                <div id="tutorialWelcomeButtonDiv">
                    <img src={require('../../assets/upArrow.svg')} id="tutorialWelcomeButton" width="50" height="50" alt="Back arrow, blue up arrow" />
                </div>
            </Link>*/}
        <div id="introContainer">
          <div id="introBanner">
              <div id="introPrompt">Welcome to
                  <span id="blue"> XPrincipia Projects</span></div>
          </div>
        <div id="tutorialContent"> 
          {/*<div id="introProse">
                Where everyone can contribute to the scientific body of progress
          </div>*/}
          <div id="introProse">
              {/*<div id="introSummary">
                 Contribute to scientific progress
              </div>*/}
              <div id="tutorialProseDescriptions">
                 Here it is your task to <span id="blue"> divide four of the largest 
                 cutting edge projects of humanity</span> into <span id="blue">sub projects</span> or <span id="blue">create your own project.</span> 
                 <br />
                 <br />
                 Vote to<span id="blue"> determine the rank</span> of each sub project. 
                 <br />
                 <br />
                 You may then <span id="blue">submit proposals towards completing each project </span>
                 or engage in a <span id="blue">variety of discussions</span> to further their progress. 
                 <br />
                 <br />
              </div>
        </div>
      </div>
      </div>
      </div>
      );
   }
}
