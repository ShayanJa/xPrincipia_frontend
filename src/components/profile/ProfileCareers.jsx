import React from 'react';
import { Link  } from 'react-router';

export default class ProfileAbout extends React.Component {
   render() {
      return (
        <div>
              <div id="aboutProseDescriptions">
                 <span id="blue">XPrincipia</span> is a startup looking for <span id="blue">high level team members</span>. 
                 <br />
                 Expertise is needed in one or more of the following:
                 <br />
                 <br />
                 <div id="aboutList">
                 1. <span id="blue">Backend</span> or <span id="blue">Frontend Programming</span>
                 <br />
                 2. <span id="blue">Sales </span> and <span id="blue">Growth</span> 
                 <br />
                 3. <span id="blue">Scientific</span> and Technology Consultation
                 </div>
                 <br />

                 If you believe in our cause, contact us:
              </div>
            <div id="profileAboutContact">
                careers@xprincipia.com
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
