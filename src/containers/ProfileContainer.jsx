import React from 'react';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TutorialProfileContent from '../components/tutorials/TutorialProfileContent.jsx';
import {Config} from '../config.js'

export default class ProfileContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            followedSolutions: [],
            createdSolutions: [],
            votedProblems: [],
            createdProblems: [],
            currentItems:[],
            currentType: 'solution',
        }


        this.onLogout = this.onLogout.bind(this);
        this.onCreatedSolution = this.onCreatedSolution.bind(this)
        this.onVotedSolution = this.onVotedSolution.bind(this)
        this.onCreatedProblem = this.onCreatedProblem.bind(this)
        this.onFollowedProblem = this.onFollowedProblem.bind(this)

        this.goToAbout = this.goToAbout.bind(this)
    }

    componentDidMount(){
        var self = this;
        axios.get( Config.API + '/auth/users/followedSolutions?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                followedSolutions: response.data,
                currentItems: response.data,
            })
        })
        axios.get( Config.API + '/auth/users/createdSolutions?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                createdSolutions: response.data,
            })
        })
        axios.get( Config.API + '/auth/users/createdProblems?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                createdProblems: response.data,
            })
        })
         axios.get( Config.API + '/auth/users/followedProblems?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                followedProblems: response.data,
            })
        })
        
    }   
    onLogout() {
        cookie.remove('userToken');
        cookie.remove('userName');
        document.location = "/login";
    }
    onCreatedSolution() {
        var self = this;
        self.setState({
            currentItems: this.state.createdSolutions,
            currentType: 'solution',
        })
    }
    onVotedSolution() {
        var self = this;
        self.setState({
            currentItems: this.state.followedSolutions,
            currentType: 'solution',
        })
    }
    onCreatedProblem() {
        var self = this;
        self.setState({
            currentItems: this.state.createdProblems,
            currentType: 'problem',
        })
    }
    onFollowedProblem() {
        var self = this;
        self.setState({
            currentItems: this.state.followedProblems,
            currentType: 'problem',
        })
    }
    goToAbout() {
        window.location.href='http://www.xprincipia.com'
    }

   render() {
      return (
    <div id="profileContainer">
        <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false}>
      <div id="profileBox">
        <div id="profileLeft">
            <div id="userInformation">
                <p id="userName">{cookie.load('userName')}</p>
                <img src={require('../assets/dnaAvatar.svg')} id="avatarImageProfile" width="160" height="160" alt="User Avatar, DNA Helix" />
                <p id="userEmail">{cookie.load('userName')}</p>
            </div>
            <div id="userOptions">
                <Link to={`/profile`} activeClassName="activeBlue">
                    <div id="userProblemsSolutionsButton">Activity</div>
                </Link>
                {/*<Link to={`/profile/resume`} activeClassName="activeBlue">
                    <div id="userProblemsSolutionsButton">Resume</div>
                </Link>*/}
                {/*<Link to={`/profile/notifications`} activeClassName="activeBlue">
                    <div id="notificationsButton">Notifications</div>
                </Link>*/}
                {/*<div id="userSettingsButton">Settings (Coming Soon)</div>*/}
                <Link to={`/profile/feedback`} activeClassName="activeBlue">
                    <div id="userFeedbackButton">Feedback</div>
                </Link>
                <Link to={`/profile/about`} activeClassName="activeBlue">
                    <div id="aboutXPButton">About XPrincipia</div>
                </Link>
                <Link to={`/profile/disclaimer`} activeClassName="activeBlue">
                    <div id="aboutXPButton">Disclaimer</div>
                </Link>
                <div id="logOutButton" onClick={this.onLogout}>Logout</div>
                {/*<br />
                <p id="xp">XP</p>*/}
            </div>
        </div>
        <div id="profileRight">
            {React.cloneElement(this.props.children, {probID: this.state.probID})}
        </div>
      </div>

        {/*<div id="tutorialProfileButtonDiv">
          <img src={require('../assets/tutorial.svg')} id="tutorialProfileButton" width="50" height="50" alt="Back arrow, blue up arrow" />
        </div>*/}
        
        <TutorialProfileContent />
        </ReactCSSTransitionGroup>
    </div>

      );
   }
}