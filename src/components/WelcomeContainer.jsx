import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeUnit from './WelcomeUnit.jsx';
import WelcomeForm from './WelcomeForm.jsx';
import WelcomeMore from './WelcomeMore.jsx';

export default class SearchContainer extends React.Component {
   render() {
      return (
        <div id="welcomeBox">
            <h1 id="welcomePrompt">Welcome to Xprincipia</h1>
            <WelcomeForm />
            <div id="welcomeProblemsElements">
              <WelcomeUnit />
              <WelcomeUnit />
              <WelcomeUnit />
              <WelcomeUnit />
            </div>
            <WelcomeMore />
        </div>
      );
   }
}
