import React from 'react';
import { Link  } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TutorialSolutionPage from '../tutorials/TutorialSolutionPage.jsx';

export default class ProblemLeftSB extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            problemInfo: [],
        }
        this.submitVote = this.submitVote.bind(this)
    };
    componentWillMount(){
      var self = this;
      return axios.get('http://localhost:10000/auth/problems/ID?id='+this.props.params.probID).then(function (response) {
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
    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }
  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get('http://localhost:10000/auth/problems/ID?id='+newProps.params.probID).then(function (response) {
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
    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    }); 

  }
  submitVote() {
      var self = this
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 0,
           TypeID: this.state.problemInfo.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = "/problem/" + self.state.parentID + "/subproblems";
            alert("Thank you, your vote has been recorded.")
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a problem.");
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
                <img src={require('../../assets/leftArrow.svg')} id="backArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
              </Link>
            </div>
            <div id="problemLeftSBIntro">
              {/*<h1 id="problemTitle">{this.state.problemInfo.Title}</h1>*/}
              <div id="SPHeaderLeftSB">
                <div id="SPTitleLeftSB">{this.state.problemInfo.Title}</div>
                <div id="SPPercentLeftSB">{floatToDecimal(this.state.problemInfo.PercentRank)}</div>
                {/*<div>
                  <img src={require('../assets/voteArrow.png')} id="SPVote" width="20" height="20" alt="Vote arrow, blue up arrow" />
                </div>*/}
              </div> 
                <div id="fullProblemHeaderSB">
                  <div id="problemAdditionalInfoLabelSB">Additional Info</div>
                  <div id="followProblemLeftSB" onClick={this.submitVote}>Vote</div>
                </div>
                <p id="problemSummary">
                  {this.state.problemInfo.Summary}
                </p>
              </div>
            </div>
          <div id="sidebar">
            {React.cloneElement(this.props.children, {probID: this.state.probID})}
          </div>
        </div>

          <div id="tutorialSolutionButtonDiv">
            <img src={require('../../assets/tutorial.svg')} id="tutorialSolutionButton" width="50" height="50" alt="Back arrow, blue up arrow" />
          </div>
          
          <TutorialSolutionPage />
          </ReactCSSTransitionGroup>
      </div>
      );
   }
}


//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}