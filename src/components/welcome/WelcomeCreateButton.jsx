import React from 'react';
import { Link } from 'react-router';

export default class WelcomeContainer extends React.Component {
   
   render() {
      return (
        <div id="createWelcomeButtonBox">
          <Link to="/welcome/create" activeClassName="activeBlue">
            <h1 id="createWelcomeButton">Create a Project</h1>
          </Link>
        </div>
      );
   }
}