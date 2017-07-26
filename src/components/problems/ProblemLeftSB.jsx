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
            parentInfo: [],
        }
        this.submitVote = this.submitVote.bind(this)
        this.unVote = this.unVote.bind(this)
    };
    componentDidMount(){
      var self = this;
      axios.get( Config.API + '/auth/problems/ID?id='+this.props.params.probID).then(function (response) {

          //set Problem Data
          self.setState({
              problemInfo: response.data
          })
    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });
          
    axios.get( Config.API + "/auth/vote/isVotedOn?type=0&typeID=" + this.props.params.probID + "&username=" + cookie.load("userName"))
          .then( function (response){
            console.log(response.data)
            self.setState({
              vote: response.data
            })
      })       
  }


  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get( Config.API + '/auth/problems/ID?id='+newProps.params.probID).then(function (response) {
        //set problem data
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
       axios.post( Config.API + '/auth/vote/create', {
           Type: 0,
           TypeID: this.state.problemInfo.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            // alert("Thank you, your vote has been recorded.")
          return axios.get( Config.API + '/auth/problems/ID?id='+self.props.params.probID).then(function (response) {
          
            //set problem data
            self.setState({
                problemInfo: response.data,
                // vote: true,
            })
            document.location = window.location.pathname 
          })
          
        })
        .catch(function (error) {
            alert("You may only vote on a project once. ");
        })
  }
unVote() {
      return axios.delete( Config.API + '/auth/vote/delete' ,{
        params: {
          type: 0,
          typeID: this.props.params.probID,
          username: cookie.load('userName')
        }
        })
        .then(function (result) {
            //set problem data
            // self.setState({
                
            //     vote: false,
            // })
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("I'm sorry, there was a problem with your request. ")
        })
        
    }

   render() {

       if (this.state.vote ===true && this.state.problemInfo.OriginalPosterUsername === cookie.load('userName')) {
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
                  <div id="votedProjectLeftSB" onClick={this.unVote}>Voted</div>
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
       } else if(this.state.problemInfo.OriginalPosterUsername === cookie.load('userName')) {
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
       } else if(this.state.vote === true) {
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
                  <div id="votedProjectLeftSB" onClick={this.unVote}>Voted</div>
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

    else {
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
}


//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100);
}