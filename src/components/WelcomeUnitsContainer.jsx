import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import WelcomeUnit from './WelcomeUnit.jsx';
import WelcomeMore from './WelcomeMore.jsx';

export default class WelcomeUnitsContainer extends React.Component {
   render() {
      return (
        <div id="welcomeUnitsContainer">
          <WelcomeUnit />
          <WelcomeUnit />
          <WelcomeUnit />
          <WelcomeUnit />
          <WelcomeMore />
        </div>
      );
   }
}
