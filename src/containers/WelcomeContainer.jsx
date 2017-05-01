import React from 'react';
import { Link } from 'react-router';

export default class WelcomeContainer extends React.Component {
   render() {
      return (
        <div id="welcomeBox">
            <Link to="/welcome"><h1 id="welcomePrompt">Welcome to XPrincipia</h1></Link>
            <Link to="/welcome/create" activeClassName="activeBlue"><div id="createWelcomeButton">Create</div></Link>
            {this.props.children}
        </div>
      );
   }
}
