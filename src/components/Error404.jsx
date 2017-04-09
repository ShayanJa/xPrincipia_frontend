import React from 'react';
import Header from '../components/Header.jsx';

export default class Error404 extends React.Component {
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