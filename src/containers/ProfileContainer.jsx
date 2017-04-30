import React from 'react';
import img from '../assets/dnablackinvert.png';
import Header from '../containers/Header.jsx';
import ProfileUnit from '../components/ProfileUnit.jsx';
import cookie from 'react-cookie';
import axios from 'axios'

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
    }

    componentDidMount(){
        var self = this;
        axios.get('http://localhost:10000/auth/users/followedSolutions?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                followedSolutions: response.data,
                currentItems: response.data,
            })
        })
        axios.get('http://localhost:10000/auth/users/createdSolutions?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                createdSolutions: response.data,
            })
        })
        axios.get('http://localhost:10000/auth/users/createdProblems?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                createdProblems: response.data,
            })
        })
         axios.get('http://localhost:10000/auth/users/followedProblems?username='+cookie.load('userName')).then(function (response) {
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

   render() {
      return (
    <div>
      <Header />
      <div id="profileBox">
        <div id="profileLeft">
            <div id="userInformation">
                <p id="userName">{cookie.load('userName')}</p>
                <img src={require('../assets/dnablackinvert.png')} id="avatarImageProfile" width="150" height="150" alt="User Avatar, DNA Helix" />
                <p id="userEmail">{cookie.load('userName')}</p>
            </div>
            <div id="userOptions">
                <div id="userProblemsSolutionsButton">Problems and Solutions (Coming Soon)</div>
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
                    <div id="followedProblemsButton" onClick={this.onFollowedProblem}>Followed</div>
                    <div id="createdProblemsButton" onClick={this.onCreatedProblem}>Created</div>
                </div>
                <div id="profileSolutionsMenu">
                    <div id="developTitle">Solutions</div>
                    <div id="votedSolutionsButton" onClick={this.onVotedSolution}>Voted</div>
                    <div id="createdSolutionsButton" onClick={this.onCreatedSolution}>Created</div>
                </div>
            </div>
            <div id="profileRightElements">
              <ProfileUnit displayItems={this.state.currentItems} currentType={this.state.currentType}/>
            </div>
            <div id="moreButton">
                More
            </div>
        </div>
      </div>
    </div>

      );
   }
}
