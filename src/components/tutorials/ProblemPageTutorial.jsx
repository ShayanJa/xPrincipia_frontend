import React from 'react';
import { Link  } from 'react-router';

export default class ProblemPageTutorial extends React.Component {
   render() {
      return (
        <div id="tutorialProblem">
          <div id="tutorialbanner">
              <div id="tutorialTitle">Problem Page Tutorial</div>
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
                  <br />Ask or answer questions
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
          {/*<Link to={`/problem/${this.state.parentID}/subproblems`}>*/}
            <div id="tutorialReturn">
                Return
            </div>
          {/*</Link>*/}
        </div>
      );
   }
}
