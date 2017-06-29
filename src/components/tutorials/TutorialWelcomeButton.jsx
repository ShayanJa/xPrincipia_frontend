import React from 'react';
import { Link } from 'react-router';

export default class TutorialWelcomeButton extends React.Component {
   
   render() {
      return (
        <div>
            <Link to="/tutorialwelcome">
                <div id="tutorialWelcomeButtonDiv">
                    <img src={require('../../assets/tutorial.svg')} id="tutorialWelcomeButton" width="50" height="50" alt="Back arrow, blue up arrow" />
                </div>
            </Link>
        </div>
      );
   }
}
