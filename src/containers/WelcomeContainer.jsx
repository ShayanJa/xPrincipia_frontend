import React from 'react';

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
