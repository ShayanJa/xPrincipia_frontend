import React from 'react';
import { Link  } from 'react-router';

export default class Info extends React.Component {
   render() {
      return (
      <div id="explanation">
          <div id="banner">
              <div id="bannerTitle">Problem Page</div>
              <div id="bannerSlogan">Break down and solve problems</div>
          </div>
          <div id="learnMore">
              <div id="introduction">
                  .
                  <br /> Problems are broken down into sub problem trees
                 <br />.<br />At each level solutions are created
                  <br />.<br />Discuss the problem: <br />Ask or answer questions
                  <br />Suggest new ideas <br />Engage in freeform discussion
                  <br /> <br />Learn and teach the skills required for 
                  further problem solving
              </div>
              <br />
          </div>
          {/*<Link to={`/problem/${this.state.parentID}/subproblems`}>*/}
            <div>
                Return
            </div>
          {/*</Link>*/}
      </div>
      );
   }
}
