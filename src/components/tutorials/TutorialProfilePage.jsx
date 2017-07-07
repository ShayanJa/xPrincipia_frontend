import React from 'react';
import { Link  } from 'react-router';

export default class TutorialProfilePage extends React.Component {
   render() {
      return (
        <div id="tutorialProfile">
          <div id="tutorialbanner">
              <div id="tutorialTitle">Your Profile</div>
              <div id="tutorialSummary">
                  <span id="tutorialNumbers">1. </span>
                  Break down and solve problems
              </div>
          </div>
          <div id="tutorialProse">
                Problems are broken down into sub problem trees

                 <br />At each level solutions are created<br /><br />
              <div id="tutorialSummary">
                  <span id="tutorialNumbers">2. </span>
                    Discuss the problem: 
              </div>
                    Ask or answer questions
                  <br />Suggest new ideas <br />
                  Engage in freeform discussion
                  <br /> 
                  <br />
              <div id="tutorialSummary">
                  <span id="tutorialNumbers">2. </span>
                    Learn and teach:
              </div>
                   {/*the skills required for 
                  further problem solving*/}
                  
              <br />
          </div>
            <div id="tutorialReturn">
                Close
            </div>
        </div>
      );
   }
}
