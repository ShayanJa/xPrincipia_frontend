import React from 'react';
import { Link  } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TutorialSolutionPage from '../tutorials/TutorialSolutionPage.jsx';
import {Config} from '../../config.js'

export default class ProblemLeftSB extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            problemInfo: [],
        }
        this.submitVote = this.submitVote.bind(this)
        this.unVote = this.unVote.bind(this)
    };
    componentWillMount(){
      var self = this;
      return axios.get( Config.API + '/auth/problems/ID?id='+this.props.params.probID).then(function (response) {
          //if parent ID is 0 then the problem is at the root of the tree
          // return id as the parentID for routing purposes
          if (response.data.ParentID === 0){
            self.setState({
              parentID: response.data.ID
            })
          }
          //set other data
          self.setState({
              problemInfo: response.data
          })
    }).then( function(response){

    })
    .catch(function (error) {
        // if(error.response.status === 401 || error.response.status === 403){
        //     document.location = "/login"
        // }
    });   
  }
  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get( Config.API + '/auth/problems/ID?id='+newProps.params.probID).then(function (response) {
          //if parent ID is 0 then the problem is at the root of the tree
          // return id as the parentID for routing purposes
          if (response.data.ParentID === 0){
            self.setState({
              parentID: response.data.ID
            })
          }
          //set other data
          self.setState({
              problemInfo: response.data,
              probID: response.data.ID
          })
    }).then( function(response){
      
    })
    .catch(function (error) {
        // if(error.response.status === 401 || error.response.status === 403){
        //     document.location = "/login"
        // }
    }); 

  }
  submitVote() {
      // Warning on console says self is not necessary here, commenting it out to be safe
      // var self = this
       axios.post( Config.API + '/auth/vote/create', {
           Type: 0,
           TypeID: this.state.problemInfo.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
            alert("Thank you, your vote has been recorded.")
        })
        .catch(function (error) {
            alert("You may only vote on a project once. ");
        })
  }
 unVote() {
      axios.delete( Config.API + '/auth/vote/delete' ,{
        params: {
          type: 0,
          typeID: this.state.problemInfo.ID,
          username: cookie.load('userName')
        }
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("I'm sorry, there was a problem with your request. ")
        })
        
    }

   render() {

      return (
      <div id="fullWide">
          <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
        <div id="maxContainerRow">
          <div id="fullProblemLeft">
            <div id="problemLeftSBHeader">
              <Link to={`/problem/${this.props.params.probID}/subproblems`}>
                <div id="backProjectArrowDiv">
                  <img src={require('../../assets/leftArrow.svg')} id="backArrowBlueHover" width="50" height="30" alt="Back arrow, blue up arrow" />
                </div>
              </Link>
            </div>
            <div id="problemLeftSBIntro">
              <div id="SPHeaderLeftSB">
                <div id="SPTitleLeftSB">{this.state.problemInfo.Title}</div>
                <div id="SPPercentLeftSB">
                  <span id="bigPercent">{floatToDecimal(this.state.problemInfo.PercentRank)}</span>%
                </div>
              </div> 
                <div id="fullProblemHeaderSB">
                  <div id="problemAdditionalInfoLabelSB">Additional Info</div>
                  <div id="followProblemLeftSB" onClick={this.submitVote}>Vote</div>
                </div>
                <p id="problemSummaryLeftSB">
                  {this.state.problemInfo.Summary}
                </p>
              </div>
            </div>
          <div id="sidebar">
            {React.cloneElement(this.props.children, {probID: this.state.probID})}
          </div>
        </div>

          {/*<div id="tutorialSolutionButtonDiv">
            <img src={require('../../assets/tutorial.svg')} id="tutorialSolutionButton" width="50" height="50" alt="Back arrow, blue up arrow" />
          </div>*/}
          
          <TutorialSolutionPage />
          </ReactCSSTransitionGroup>
      </div>
      );
   }
}


//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100);
}