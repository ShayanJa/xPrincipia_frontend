import React from 'react';
import {  Link  } from 'react-router';

export default class Header extends React.Component {

   render() {
      return (
        <div>
            <Link to={'profile/about'}>
                <div id="footerWelcome">
                    About XPrincipia
                </div>
            </Link>
        </div>
      );
   }
}
