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
                 {/*<span id="aboutBlue">*/}
                   Work together to:
                 {/*</span>*/}
                 <br />
                 <div id="aboutList">
                 <span id="blue">1. Complete major projects </span>for humanity's future
                 <br />
                 <span id="blue">2. Determine the best proposals </span>towards their achievement 
                 <br />
                 <span id="blue">3. Learn the subjects needed </span>to master each project
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
