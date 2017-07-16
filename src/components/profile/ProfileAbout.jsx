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
                 <span id="blue">XPrincipia</span> is an <span id="blue">open source research and development </span>web app allowing anyone to contribute to scientific progress.
                 <br />
                 <br />
                 Our mission is to <span id="blue">advance humanity to the best possible future. </span>
                 <br />
                 <br />
                 {/*<span id="aboutBlue">*/}
                 
                 Together we aim to:
                 {/*</span>*/}
                 <br />
                 <div id="aboutList">
                 <span id="blue">1. Breakdown major scientific projects </span>into <span id="blue">levels of sub projects</span>. 
                 <br />
                 <span id="blue">2. Create proposals </span>for lower-level sub projects and solve each major project <span id="blue">bottom-up</span>. 
                 <br />
                 <span id="blue">3. Learn and teach</span> the subjects needed to master each project.
                 </div>
                 <br />
                 Over time <span id="blue">new parts of the site will open</span>, with the goal of becoming the <span id="blue">online center for scientific progress</span>. 
                 <br />
                 <br />
                 <span id="blue">XPrincipia Crowdfunding </span> will open in <span id="blue">2018</span>, 
                 allowing users to choose which <span id="blue"> experiments to conduct </span> and <span id="blue"> prototypes to create</span>.
                 <br />
                 <br />
                 <span id="blue">XPrincipia Market </span> will open in <span id="blue">2020</span>, 
                 providing users with the <span id="blue">technology</span>, <span id="blue">scientific equipment</span> and <span id="blue">raw materials</span> to create and research <span id="blue"> on their own</span>.
                 <br />
                 <br />
                 <br />
                 <span id="blue">Contact us</span> for more information:
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
            <div id="profileAboutContact">
                info@xprincipia.com
            </div>
            <div id="profileAboutQuote">
                It is the business of the future to be dangerous … The major advances in civilization are processes 
                that all but wreck the societies in which they occur.
                <br />
                <br />
                - A.N. Whitehead
            </div>
        </div>
      </div>
      );
   }
}
