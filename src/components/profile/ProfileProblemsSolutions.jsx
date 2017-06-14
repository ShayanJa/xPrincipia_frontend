import React from 'react';
import Header from '../../containers/Header.jsx';
import ProfileUnit from '../../components/profile/ProfileUnit.jsx';
import cookie from 'react-cookie';
import axios from 'axios'

export default class ProfileProblemsSolutions extends React.Component {
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
    goToAbout() {
        window.location.href='http://www.xprincipia.com'
    }

   render() {
      return (
    <div>
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
        {/*<div id="moreButtonProfile">
            More
        </div>*/}
    </div>

      );
   }
}
