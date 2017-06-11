import React from 'react';
import { Link  } from 'react-router';

export default class TutorialProblemPage extends React.Component {
   render() {
      return (
        <div id="profileAbout">
          <div id="profileAboutBanner">
              <div id="profileAboutTitle">XPrincipia</div>
              <div id="profileAboutSummary">
                 I. Break down and solve problems
              </div>
          </div>
          <div id="profileAboutProse">
                Problems are broken down into sub problem trees
                 <br />
                 At each level solutions are created
              <div id="profileAboutSummary">
                II. Discuss the problem: 
              </div>
                Ask or answer questions
                <br />
                Suggest new ideas 
                <br />
                Engage in freeform discussion
              <div id="profileAboutSummary">
                III. Discuss the problem: 
              </div>
          </div>
            <div id="profileAboutReturn">
                info@xprincipia.com
            </div>
        </div>
      );
   }
}
