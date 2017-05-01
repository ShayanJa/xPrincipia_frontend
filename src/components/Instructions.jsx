import React from 'react';
import Header from '../containers/Header.jsx';

export default class Instructions extends React.Component {
   render() {
      return (
      <div>
        <Header />
            <div id="errorContainer">
                <div id="error">
                    <h1 id="welcomePrompt">404 Error</h1>
                    <div id="errorSlogan">The page was not found</div>
                </div>
            </div>
      </div>
      );
   }
}