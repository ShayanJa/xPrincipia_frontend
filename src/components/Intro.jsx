import React from 'react';
import Header from '../containers/Header.jsx';

export default class Instructions extends React.Component {
   render() {
      return (
      <div>
        <Header />
            <div id="errorContainer">
                <div id="error">
                    <h1 id="welcomePrompt">XPrincipia</h1>
                    <div id="errorSlogan">Scientific Democracy</div>
                </div>
            </div>
      </div>
      );
   }
}