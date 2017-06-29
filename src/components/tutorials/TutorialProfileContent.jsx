import React from 'react';
import Header from '../../containers/Header.jsx';
import { Link } from 'react-router';

export default class TutorialProfileContent extends React.Component {
   render() {
      return (
        <div>
            <Link to="/tutorialwelcome">
                <div id="tutorialWelcomeButtonDiv">
                    <img src={require('../../assets/upArrow.svg')} id="tutorialWelcomeButton" width="50" height="50" alt="Back arrow, blue up arrow" />
                </div>
            </Link>
        <div id="introContainer">
          <div id="introBanner">
              <div id="introPrompt">Welcome to your
                  <span id="blue"> User Headerquarters</span></div>
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
                 Here the <span id="blue">projects and proposals</span> you have <span id="blue">voted on or created</span> are displayed.
                 <br />
                 <br />
                 Provide feedback of how 
                 <span id="blue"> you think XPrincipia should be improved.</span>
                 <br />
                 <br />
                 Learn about XPrincipia and <span id="blue">contact us</span> for any additional information. 
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
