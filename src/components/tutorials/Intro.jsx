import React from 'react';
import Header from '../../containers/Header.jsx';
import { Link } from 'react-router';

export default class Intro extends React.Component {
   render() {
      return (
        <div id="tutorialIntro">
          <div id="introBanner">
              <div id="introPrompt">Welcome to XPrincipia</div>
          </div>
        <div id="introContent"> 
          <div id="introProse">
                Everyone can contribute to (incomplete)
          </div>
              <div id="tutorialSummary">
                  <span id="tutorialNumbers">1. </span>
                  Break down and solve problems
              </div>
          <div id="tutorialProse">
                Problems are broken down into sub problem trees

                 <br />At each level solutions are created<br /><br />
              <div id="tutorialSummary">
                  <span id="tutorialNumbers">2. </span>
                    Discuss the problem: 
              </div>
                    Ask or answer questions
                  <br />Suggest new ideas <br />
                  Engage in freeform discussion
                  <br /> 
                  <br />
              <div id="tutorialSummary">
                  <span id="tutorialNumbers">2. </span>
                    Learn and teach:
              </div>
          <div id="introProse2">
                Press<img src={require('../../assets/tutorial.svg')} id="tutorialIntroButton" width="35" height="35" alt="Back arrow, blue up arrow" /> 
                 at each stage for further instructions along the way. 
          </div>
        </div>
              <br />
          </div>
                <Link to='/welcome'>
                    <div id="enterButton">
                        Enter
                    </div>
                </Link>
        </div>
      );
   }
}

