import React from 'react';
import ReactDOM from 'react-dom';

export default class Explanation extends React.Component {
   render() {
      return (
      <div id="explanation">
          <div id="banner">
              <div id="bannerTitle">XPrincipia</div>
              <div id="bannerSlogan">Open Source Science</div>
          </div>
          <div id="learnMore">
              <p id="welcomeLogin">Welcome</p> <br />
              <p id="introduction">We are an open source scientific development network allowing anyone to
                  contribute to humanity's work on cutting edge progress.
                  <br />
                  <br /> Join to create and develop solutions to today's many problems. Together we aim to build our best future.
              </p>
              <br />
          </div>
      </div>
      );
   }
}
