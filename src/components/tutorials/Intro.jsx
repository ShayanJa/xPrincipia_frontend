import React from 'react';
import Header from '../../containers/Header.jsx';
import { Link } from 'react-router';

export default class Intro extends React.Component {
   render() {
      return (
        <div id="introContainer">
          <div id="introBanner">
              <div id="introPrompt">Welcome to XPrincipia</div>
          </div>
        <div id="introContent"> 
          {/*<div id="introProse">
                Where everyone can contribute to the scientific body of progress
          </div>*/}
          <div id="introProse">
              <div id="introSummary">
                 Contribute to scientific progress
              </div>
              <div id="introProseDescriptions">
                 Breakdown critical projects for the future
                 <br />
                 Create proposals 
                 towards their achievement 
                 <br />
                 <br />
              </div>
              <div id="introSummary">
                Win competitions
              </div>
                  <div id="introProseDescriptions">
                    Compete for best proposal on a featured project
                    <br />
                    Win prizes
                    <br /> 
                    <br />
                  </div>
              <div id="introSummary">
                Learn and teach
              </div>
          <div id="introProseDescriptions">
                Master your craft
                By learning or teaching along the way<br />
          </div>
        </div>
              <br />
          </div>
                <Link to='/welcome'>
                    <div id="introEnterButton">
                        Login
                    </div>
                </Link>
        </div>
      );
   }
}

