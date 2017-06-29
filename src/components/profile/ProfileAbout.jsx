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
                 XPrincipia is a website allowing everyone to contribute to scientific progress.
                 <br />
                 <br />
                 <span id="aboutBlue">
                   Work together to:
                 </span>
                 <br />
                 <div id="aboutList">
                 1. Complete major projects for humanity's future
                 <br />
                 2. Determine the best proposals towards their achievement 
                 <br />
                 3. Learn deeply about the subjects required
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
