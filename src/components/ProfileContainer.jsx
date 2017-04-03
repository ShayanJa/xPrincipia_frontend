import React from 'react';
import ReactDOM from 'react-dom';
import img from '../assets/dnablackinvert.png'
import SearchUnit from './SearchUnit.jsx';
import ProfileUnit from './ProfileUnit.jsx';

export default class ProfileContainer extends React.Component {
   render() {
      return (

      <div id="profileBox">
        <div id="profileLeft">
            <div id="userInformation">
                <p id="userName">Ben Francis</p>
                <img src={require('../assets/dnablackinvert.png')} id="avatarImage" width="150" height="150" />
                <p id="userEmail">franc514@umn.edu</p>
            </div>
            <div id="userOptions">
                <div id="userProblemsSolutionsButton">Problems and Solutions</div>
                <div id="notificationsButton">Notifications (Coming Soon)</div>
                <div id="userSettingsButton">Settings (Coming Soon)</div>
                <div id="aboutXPButton">About XPrincipia (Coming Soon)</div>
                <div id="logOutButton">Logout</div>
                <br />
                <p id="xp">XP</p>
            </div>
        </div>
        <div id="profileRight">
            <div id="profileSidebarMenu">
                <div id="profileProblemsMenu">
                    <div id="solveTitle">Problems</div>
                    <a href="./solutionslist.html"><div id="followedProblemsButton">Followed</div></a>
                    <a href="./subproblemlist.html"><div id="createdProblemsButton">Created</div></a>
                </div>
                <div id="profileSolutionsMenu">
                    <div id="developTitle">Solutions</div>
                    <a href="./commentslist.html"><div id="votedSolutionsButton">Followed</div></a>
                    <a href="./suggestionslist.html"><div id="createdSolutionsButton">Created</div></a>
                </div>
            </div>
            <div id="profileRightElements">
              <ProfileUnit />
              <ProfileUnit />
              <ProfileUnit />
              <ProfileUnit />
            </div>
            <a href="moreElementsHere"><div id="moreButton">
                More
            </div></a>
        </div>
      </div>

      );
   }
}
