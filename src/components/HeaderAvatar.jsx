import React from 'react';
import {  Link  } from 'react-router';
import cookie from 'react-cookie';

export default class HeaderAvatar extends React.Component {

   render() {
      return (
        <div id="avatarHeader">
            <Link to="/profile" id="whiteHeader">
            <div id="avatarFullName">
                <div id="headerName">{cookie.load("userName")}</div>
                <img src={require('../assets/dnaAvatar.svg')} id="avatarImage" width="33" height="33" alt="User avatar, DNA Helix" />
            </div>
            </Link>
        </div>
      );
   }
}