import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
// Currently unused, may use later. Loading only loads part of page, currently looks weird
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TutorialWelcomeContent from '../components/tutorials/TutorialWelcomeContent.jsx';
import WelcomeUnit from '../components/welcome/WelcomeUnit.jsx';
import WelcomeUserUnit from '../components/welcome/WelcomeUserUnit.jsx';
import {Config} from '../config.js'

export default class WelcomeContainer extends React.Component {
   
    constructor(props){
        super(props);

        this.state = {
           problems : [],
           userproblems : [],
           searchText: [],
        }
        this.queryProblem = this.queryProblem.bind(this)
    };


     queryProblem () {
         //get search text box data
        this.state.searchText = document.getElementById('exploreInput').value

        var self = this
        return axios.get( Config.API + '/auth/problems/search?q='+this.state.searchText).then(function (response) {
            self.setState({
              userproblems: response.data
            })
        })
        .catch(function (error) {
            if(error.response.status === 401 || error.response.status === 403) {
                document.location = "/login"
            }
        }); 
        }
        componentWillMount(){
        var self = this;
        return axios.get( Config.API + '/auth/problems/all').then(function (response) {
            self.setState({
                problems: response.data,
                userproblems: response.data
            })
        }) 
        .catch(function (error) {
            if(error.response.status === 401 || error.response.status === 403){
                document.location = "/login"
            }
        }); 
        }
   
   render() {
      return (
        <div>
            {/*<ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionEnter={false}
            transitionLeave={false}>*/}
          <div id="welcomeBox">
              <Link to="/welcome">
                <h1 id="welcomePrompt">XPrincipia Projects</h1>
              </Link>
          </div>

          <div id="welcomeUnitsContainer">
                <WelcomeUnit problems={this.state.problems} />
          </div>
          
          {this.props.children}

         <div id="welcomeFormComponent">
               <form  id="exploreWelcomeForm">
                 <input type="search" name="search"
                    placeholder="Search all projects" id="exploreInput"  onKeyDown={this.queryProblem} autoFocus/>
                 {/*<input type="submit" value="Go" id="submitExplore" />*/}
            </form>
         </div>
          <div id="welcomeUserUnitsContainer">
              <WelcomeUserUnit problems={this.state.userproblems} />
          </div>

          {/*<div id="tutorialWelcomeButtonDiv">
            <img src={require('../assets/tutorial.svg')} id="tutorialWelcomeButton" width="50" height="50" alt="Back arrow, blue up arrow" />
          </div>*/}

          <TutorialWelcomeContent />
          {/*</ReactCSSTransitionGroup>*/}
        </div>
      );
   }
}
