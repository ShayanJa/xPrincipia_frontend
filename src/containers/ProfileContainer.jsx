import React from 'react';
import ReactDOM from 'react-dom';
import img from '../assets/dnablackinvert.png';
import Header from '../components/Header.jsx';
import ProfileUnit from '../components/ProfileUnit.jsx';
import SearchUnit from '../components/SearchUnit.jsx'; 
import cookie from 'react-cookie'

export default class ProfileContainer extends React.Component {
    constructor(){
        super();
    

    this.onLogout = this.onLogout.bind(this);
    }   
    onLogout() {
        cookie.remove('userToken');
        cookie.remove('userName');
        document.location = "/login";
    }
   render() {
      return (
    <div>
      <Header />
      <div id="profileBox">
        <div id="profileLeft">
            <div id="userInformation">
                <p id="userName">{cookie.load('userName')}</p>
                <img src={require('../assets/dnablackinvert.png')} id="avatarImage" width="150" height="150" />
                <p id="userEmail">{cookie.load('userName')}</p>
            </div>
            <div id="userOptions">
                <div id="userProblemsSolutionsButton">Problems and Solutions</div>
                <div id="notificationsButton">Notifications (Coming Soon)</div>
                <div id="userSettingsButton">Settings (Coming Soon)</div>
                <div id="aboutXPButton">About XPrincipia (Coming Soon)</div>
                <div id="logOutButton" onClick={this.onLogout}>Logout</div>
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
                    <a href="./commentslist.html"><div id="votedSolutionsButton">Voted</div></a>
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
    </div>

      );
   }
}