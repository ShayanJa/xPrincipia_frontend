import React from 'react';
import Header from '../../containers/Header.jsx';
import { Link } from 'react-router';

export default class TutorialWelcomeContent extends React.Component {
   render() {
      return (
        <div>
            <Link to="/tutorialwelcome">
                <div id="tutorialWelcomeButtonDiv">
                    <img src={require('../../assets/upArrow.svg')} id="tutorialWelcomeButton" width="50" height="50" alt="Back arrow, blue up arrow" />
                </div>
            </Link>
        <div id="introContainer">
          <div id="introBanner">
              <div id="introPrompt">Welcome to
                  <span id="blue"> XPrincipia Projects</span></div>
          </div>
        <div id="tutorialContent"> 
          {/*<div id="introProse">
                Where everyone can contribute to the scientific body of progress
          </div>*/}
          <div id="introProse">
              {/*<div id="introSummary">
                 Contribute to scientific progress
              </div>*/}
              <div id="tutorialProseDescriptions">
                 Here it is your task to divide <span id="blue">four of the largest 
                 cutting edge projects of humanity</span> into sub projects or create your own project. 
                 <br />
                 <br />
                 Vote to<span id="blue"> determine the structure</span> of each overall project. 
                 <br />
                 <br />
                 You may then <span id="blue">submit proposals towards completing the project </span>
                 or discuss it to help others. 
                 <br />
                 <br />
              </div>
        </div>
      </div>
      </div>
      </div>
      );
   }
}
