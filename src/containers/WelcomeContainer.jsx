import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Header from '../components/Header.jsx';

export default class WelcomeContainer extends React.Component {
   render() {
      return (
        <div id="welcomeBox">
            <h1 id="welcomePrompt">Welcome to XPrincipia</h1>
            {/*<Link to="/welcome/create"><div id="createWelcomeButton">Create</div></Link>*/}
            {this.props.children}
        </div>
      );
   }
}
