import React from 'react';
import { Link  } from 'react-router';

export default class ProblemPageTutorial extends React.Component {
   render() {
      return (
      <div id="tutorialProblemBackground">
        <div id="tutorialProblem">
          <div id="tutorialbanner">
              <div id="tutorialTitle">Problem Page Tutorial</div>
              <div id="tutorialSummary">Break down and solve problems</div>
          </div>
          <div id="tutorialProse">
                  .
                  <br /> Problems are broken down into sub problem trees

                 <br />.<br />At each level solutions are created

                  <br />.<br />Discuss the problem: 
                  <br />Ask or answer questions
                  <br />Suggest new ideas <br />
                  Engage in freeform discussion
                  <br /> 
                  <br />Learn and teach the skills required for 
                  further problem solving
              <br />
          </div>
          {/*<Link to={`/problem/${this.state.parentID}/subproblems`}>*/}
            <div id="tutorialReturn">
                Return
            </div>
          {/*</Link>*/}
        </div>
      </div>
      );
   }
}
