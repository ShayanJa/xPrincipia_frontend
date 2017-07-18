import React from 'react';
import { Link } from 'react-router';

export default class TutorialProfileContent extends React.Component {
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
              <div id="introPrompt">Welcome to your
                  <span id="blue"> User Headquarters</span></div>
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
                 <span id="blue">Access </span>the <span id="blue">projects and proposals</span> you have <span id="blue">created</span> or <span id="blue">voted</span> on.
                 <br />
                 <br />
                {/*<span id="blue">View your resume </span>of original contributions.
                 <br />
                 <br />*/}
                 <span id="blue">Tell us </span>how to <span id="blue">improve XPrincipia</span>.
                 <br />
                 <br />
                 <span id="blue">Learn about XPrincipia</span> or <span id="blue">contact us</span> for additional information. 
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
