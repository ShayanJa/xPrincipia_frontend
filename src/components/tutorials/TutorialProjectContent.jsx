import React from 'react';

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
                 View this project's <span id="blue">own sub projects </span>and<span id="blue"> create new ones.</span>
                 <br />
                 <br />
                 <span id="blue">Disscuss</span> the project by asking questions,
                  giving suggestions or engaging in freeform discussion. 
                 <br />
                 <br />
                 <span id="blue">Learn </span>about each subject and<span id="blue"> teach others.</span>
                 <br />
                 <br />
                 When you are ready,<span id="blue"> visit the proposals </span>and
                <span id="blue"> vote for the best.</span>
                 <br />
                 <br />
                 Finally, <span id="blue"> create your own proposal</span> and analyze the pros and cons of others. 
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
