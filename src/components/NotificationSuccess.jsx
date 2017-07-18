import React from 'react';
import {  Link  } from 'react-router';

export default class NotificationFailure extends React.Component {

   render() {
      return (
        <div id="notificationSuccessBox">
            <Link to="/profile">
                <div id="notificationSuccessText">Post Successful</div>
            </Link>
        </div>
      );
   }
}