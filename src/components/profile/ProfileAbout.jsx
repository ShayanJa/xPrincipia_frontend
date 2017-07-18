import React from 'react';
import { Link  } from 'react-router';

export default class ProfileAbout extends React.Component {
   render() {
      return (
        <div>
              <div id="aboutProseDescriptions">
                 <span id="blue">XPrincipia</span> is an <span id="blue">open source research and development </span>web app allowing anyone to contribute to scientific progress.
                 <br />
                 <br />
                 Our mission is to <span id="blue">advance humanity to the best possible future. </span>
                 <br />
                 <br />
                 
                 Together we aim to:
                 <br />
                 <div id="aboutList">
                 <span id="blue">1. </span>Breakdown <span id="blue"> major scientific projects </span>into <span id="blue">levels of sub projects</span>. 
                 <br />
                 <span id="blue">2. Create proposals </span>for lower-level sub projects and solve each major project <span id="blue">bottom-up</span>. 
                 <br />
                 <span id="blue">3. Learn and teach</span> the subjects needed to master each project.
                 </div>
                 <br />
                 Over time <span id="blue">new areas of the site will open</span>, with the goal of becoming the <span id="blue">online center for scientific progress</span>. 
                 <br />
                 <br />
                 <span id="blue">XPrincipia Competitions </span> will open on <span id="blue">Labor Day 2017</span>, 
                 allowing users to develop <span id="blue">specific projects </span> with the incentive of <span id="blue">themed prizes</span>.
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
      );
   }
}
