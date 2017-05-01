import React from 'react';
import Header from '../containers/Header.jsx';

export default class Error404 extends React.Component {
   render() {
       setTimeout(function(){window.location.href='/profile'},4000)
      return (
      <div>
        <Header />
            <div id="errorContainer">
                <div id="error">
                    <img src={require('../assets/flame.svg')}  width="130" height="130" alt="User avatar, DNA Helix" />
                    <h1 id="errorTitle">404</h1>
                    <div id="errorSlogan">page not found...</div>
                    <div id="errorSlogan">redirecting...</div>
                    
                </div>
             
            </div>
      </div>
      );
   }
}
