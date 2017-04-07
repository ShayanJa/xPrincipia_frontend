import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import WelcomeForm from '../components/WelcomeForm.jsx';
import Header from '../components/Header.jsx';

export default class WelcomeContainer extends React.Component {
   render() {
      return (
        <div id="welcomeBox">
            <h1 id="welcomePrompt">Welcome to XPrincipia</h1>
            <WelcomeForm />
            {/*<Link to="/welcome/create"><div id="createWelcomeButton">Create</div></Link>*/}
            {this.props.children}
        </div>
      );
   }
}
