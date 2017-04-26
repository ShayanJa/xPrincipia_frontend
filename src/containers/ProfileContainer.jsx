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
        this.onCreatedSolutions = this.onCreatedSolutions.bind(this)
        this.onVotedSolutions = this.onVotedSolutions.bind(this)
    }

    componentDidMount(){
        var self = this;
        axios.get('http://localhost:10000/users/followedSolutions?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                followedSolutions: response.data,
                currentItems: response.data,
            })
        })
        axios.get('http://localhost:10000/users/createdSolutions?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                createdSolutions: response.data,
            })
        })
        
    }   
    onLogout() {
        cookie.remove('userToken');
        cookie.remove('userName');
        document.location = "/login";
    }
    onCreatedSolutions() {
        var self = this;
        self.setState({
            currentItems: this.state.createdSolutions,
            currentType: 'solution',
        })
    }
    onVotedSolutions() {
        var self = this;
        self.setState({
            currentItems: this.state.followedSolutions,
            currentType: 'solution',
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
                    <div id="followedProblemsButton">Followed</div>
                    <div id="createdProblemsButton">Created</div>
                </div>
                <div id="profileSolutionsMenu">
                    <div id="developTitle">Solutions</div>
                    <div id="votedSolutionsButton" onClick={this.onVotedSolutions}>Voted</div>
                    <div id="createdSolutionsButton" onClick={this.onCreatedSolutions}>Created</div>
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
