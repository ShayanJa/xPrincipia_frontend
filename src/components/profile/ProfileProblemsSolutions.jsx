import React from 'react';
import ProfileUnit from '../../components/profile/ProfileUnit.jsx';
import cookie from 'react-cookie';
import axios from 'axios'
import {Config} from '../../config.js'

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
        axios.get( Config.API + '/auth/users/followedSolutions?username='+cookie.load('userName')).then(function (response) {
            self.setState({
                followedSolutions: response.data,
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
                currentItems: response.data,
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

       if (this.state.currentItems === this.state.createdProblems) {
      return (
    <div>
        <div id="profileSidebarMenu">
            <div id="profileProjectsMenu">
                <div id="projectsTitleProfile">Projects</div>
                <div id="createdProblemsButtonActive" onClick={this.onCreatedProblem}>Created</div>
                <div id="followedProblemsButton" onClick={this.onFollowedProblem}>Voted</div>
            </div>
            <div id="profileProposalsMenu">
                <div id="proposalsTitleProfile">Proposals</div>
                <div id="createdSolutionsButton" onClick={this.onCreatedSolution}>Created</div>
                <div id="votedSolutionsButton" onClick={this.onVotedSolution}>Voted</div>
            </div>
        </div>
        <div id="profileRightElements">
            <ProfileUnit displayItems={this.state.currentItems} currentType={this.state.currentType}/>
        </div>
        {/*<div id="moreButtonProfile">
            More
        </div>*/}
    </div>);

    }  else if ( this.state.currentItems === this.state.followedProblems) {
        return (
    <div>
        <div id="profileSidebarMenu">
            <div id="profileProjectsMenu">
                <div id="projectsTitleProfile">Projects</div>
                <div id="createdProblemsButton" onClick={this.onCreatedProblem}>Created</div>
                <div id="followedProblemsButtonActive" onClick={this.onFollowedProblem}>Voted</div>
            </div>
            <div id="profileProposalsMenu">
                <div id="proposalsTitleProfile">Proposals</div>
                <div id="createdSolutionsButton" onClick={this.onCreatedSolution}>Created</div>
                <div id="votedSolutionsButton" onClick={this.onVotedSolution}>Voted</div>
            </div>
        </div>
        <div id="profileRightElements">
            <ProfileUnit displayItems={this.state.currentItems} currentType={this.state.currentType}/>
        </div>
        {/*<div id="moreButtonProfile">
            More
        </div>*/}
    </div>);

    }  else if ( this.state.currentItems === this.state.createdSolutions) {
        return (
    <div>
        <div id="profileSidebarMenu">
            <div id="profileProjectsMenu">
                <div id="projectsTitleProfile">Projects</div>
                <div id="createdProblemsButton" onClick={this.onCreatedProblem}>Created</div>
                <div id="followedProblemsButton" onClick={this.onFollowedProblem}>Voted</div>
            </div>
            <div id="profileProposalsMenu">
                <div id="proposalsTitleProfile">Proposals</div>
                <div id="createdSolutionsButtonActive" onClick={this.onCreatedSolution}>Created</div>
                <div id="votedSolutionsButton" onClick={this.onVotedSolution}>Voted</div>
            </div>
        </div>
        <div id="profileRightElements">
            <ProfileUnit displayItems={this.state.currentItems} currentType={this.state.currentType}/>
        </div>
        {/*<div id="moreButtonProfile">
            More
        </div>*/}
    </div>);
    }  else if (this.state.currentItems === this.state.followedSolutions) {
        return (       
        <div>
        <div id="profileSidebarMenu">
            <div id="profileProjectsMenu">
                <div id="projectsTitleProfile">Projects</div>
                <div id="createdProblemsButton" onClick={this.onCreatedProblem}>Created</div>
                <div id="followedProblemsButton" onClick={this.onFollowedProblem}>Voted</div>
            </div>
            <div id="profileProposalsMenu">
                <div id="proposalsTitleProfile">Proposals</div>
                <div id="createdSolutionsButton" onClick={this.onCreatedSolution}>Created</div>
                <div id="votedSolutionsButtonActive" onClick={this.onVotedSolution}>Voted</div>
            </div>
        </div>
        <div id="profileRightElements">
            <ProfileUnit displayItems={this.state.currentItems} currentType={this.state.currentType}/>
        </div>
        {/*<div id="moreButtonProfile">
            More
        </div>*/}
    </div>);
 } else {
      return (
    <div>
        <div id="profileSidebarMenu">
            <div id="profileProjectsMenu">
                <div id="projectsTitleProfile">Projects</div>
                <div id="createdProblemsButton" onClick={this.onCreatedProblem}>Created</div>
                <div id="followedProblemsButtonActive" onClick={this.onFollowedProblem}>Voted</div>
            </div>
            <div id="profileProposalsMenu">
                <div id="proposalsTitleProfile">Proposals</div>
                <div id="createdSolutionsButton" onClick={this.onCreatedSolution}>Created</div>
                <div id="votedSolutionsButton" onClick={this.onVotedSolution}>Voted</div>
            </div>
        </div>
        <div id="profileRightElements">
            <ProfileUnit displayItems={this.state.currentItems} currentType={this.state.currentType}/>
        </div>
        {/*<div id="moreButtonProfile">
            More
        </div>*/}
    </div>);
   }
}}
