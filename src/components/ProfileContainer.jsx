import React from 'react';
import ReactDOM from 'react-dom';
import SearchUnit from './SearchUnit.jsx';

export default class ProfileContainer extends React.Component {
   render() {
      return (

      <div id="profileBox">
        <div id="profileLeft">
            <div id="userInformation">
                <p id="userName">Ben Francis</p>
                <img src="dnablack.png" class="img-rounded" id="avatar" width="150" height="150" />
                <p id="userEmail">franc514@umn.edu</p>
            </div>
            <div id="userOptions">
                <div id="userProblemsSolutionsButton">Problems and Solutions</div>
                <div id="notificationsButton">Notifications</div>
                <div id="userSettingsButton">Settings</div>
                <div id="aboutXPButton">About XPrincipia</div>
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
              <SearchUnit />
              <SearchUnit />
              <SearchUnit />
              <SearchUnit />
            </div>
            <a href="moreElementsHere"><div id="moreButton">
                More
            </div></a>
        </div>
      </div>

      );
   }
}
