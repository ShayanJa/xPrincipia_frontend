import React from 'react';
import Header from '../../containers/Header.jsx';
import { Link } from 'react-router';

export default class TutorialProjectContent extends React.Component {
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
              <div id="introPrompt">Welcome to the
                  <span id="blue"> Project Center</span></div>
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
                 <span id="blue">Vote for this project</span> if you believe
                  it is the most important in its <span id="blue"> sub project level</span>.
                 <br />
                 <br />
                 View this project's <span id="blue">own sub projects</span>.
                 <br />
                 <br />
                 <span id="blue">Disscuss</span> the project by asking questions,
                  giving suggestions or engaging in freeform discussion. 
                 <br />
                 <br />
                 <span id="blue">Learn </span>about each subject or<span id="blue"> teach</span> others. 
                 <br />
                 <br />
                 When you are ready, visit the proposals and
                 <span id="blue"> vote for the best</span>.
                 <br />
                 <br />
                 Finally, <span id="blue"> create a proposal</span> an analyze the pros and cons of others. 
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
