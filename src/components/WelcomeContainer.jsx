import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import WelcomeUnitsContainer from './WelcomeUnit.jsx';
import WelcomeForm from './WelcomeForm.jsx';
import WelcomeMore from './WelcomeMore.jsx';

export default class WelcomeContainer extends React.Component {
   render() {
      return (
        <div id="welcomeBox">
            <h1 id="welcomePrompt">Welcome to Xprincipia</h1>
            <WelcomeForm />
            <Link to="/problem/createproblem"><div id="createWelcomeButton">Create</div></Link>
            <WelcomeUnitsContainer />
            <WelcomeMore />
        </div>
      );
   }
}
