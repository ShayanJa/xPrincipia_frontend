import React from 'react';
import { Link } from 'react-router';
import Header from './Header.jsx';
import TutorialWelcomePage from '../components/tutorials/TutorialWelcomePage.jsx';

export default class WelcomeContainer extends React.Component {
   render() {
      return (
        <div>
          <Header />
          <div id="welcomeBox">
              <Link to="/welcome"><h1 id="welcomePrompt">Select a Project to Begin</h1></Link>
              {/*<Link to="/welcome/create" activeClassName="activeBlue"><div id="createWelcomeButton">Create</div></Link>*/}
          </div>
          {this.props.children}

          <div id="tutorialWelcomeButtonDiv">
            <img src={require('../assets/tutorial.svg')} id="tutorialWelcomeButton" width="50" height="50" alt="Back arrow, blue up arrow" />
          </div>

          <TutorialWelcomePage />

        </div>
      );
   }
}
