import React from 'react';
import { Link  } from 'react-router';

export default class TutorialProblemPage extends React.Component {
   render() {
      return (
        <div id="profileAbout">
          <div id="profileAboutBanner">
              <div id="profileAboutTitle">XPrincipia</div>
          <div id="introProse">
              {/*<div id="introSummary">
                 Contribute to scientific progress
              </div>*/}
              <div id="aboutProseDescriptions">
                 XPrincipia is a website that <span id="blue">allows everyone to contribute to scientific progress. </span>
                 <br />
                 <br />
                 <span id="aboutBlue">
                   Work together to:
                 </span>
                 <br />
                 <div id="aboutList">
                 <span id="blue">1. </span>Complete major projects for humanity's future
                 <br />
                 <span id="blue">2. </span>Determine the best proposals towards their achievement 
                 <br />
                 <span id="blue">3. </span>Learn deeply about the subjects required
                 </div>
              </div>
              {/*<div id="introSummary">
                Win competitions
              </div>
                  <div id="introProseDescriptions">
                    Compete for best proposal on a featured project
                    <br />
                    Win prizes
                    <br /> 
                    <br />
                  </div>*/}
          </div>
            <div id="profileAboutReturn">
                info@xprincipia.com
            </div>
        </div>
      </div>
      );
   }
}
