import React from 'react';
import {  Link  } from 'react-router';

export default class NotificationFailure extends React.Component {

   render() {
      return (
        <div id="notificationFailureBox">
            <Link to="/profile">
                <div id="notificationFailureText">Post Failure</div>
            </Link>
        </div>
      );
   }
}