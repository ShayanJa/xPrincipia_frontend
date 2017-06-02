import React from 'react';
import { Link  } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import SideBarProblemMenu from './SideBarProblemMenu.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import TutorialProblemPage from './tutorials/TutorialProblemPage.jsx';


export default class FullProblem extends React.Component {
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
            alert("I'm sorry, you have already voted on a problem.");
        })
  }

   render() {

      return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnter={false}
      transitionLeave={false}>
      <div id="maxContainerColumn">
        
        <div id="problemRow1">
          <Link to={`/problem/${this.state.parentID}/subproblems`}>
            <img src={require('../assets/parent2.svg')} id="SPArrow" width="70" height="70" alt="Back arrow, blue up arrow" />
          </Link>
          <div id="problemIntro">
            <h1 id="problemTitle">{this.state.problemInfo.Title}</h1>
          </div>
          {/*<img src={require('../assets/tutorial.svg')} id="tutorialProblemButton" width="50" height="50" alt="Back arrow, blue up arrow" />*/}
        </div>
        <div id="problemRow2">
          <div id="fullProblem">
            <div id="fullProblemHeader">
              <div id="problemAdditionalInfoLabel">Additional Information</div>
              <div id="followProblem" onClick={this.submitVote}>Vote</div>
            </div>
            <p id="problemSummary">
              {this.state.problemInfo.Description}
            </p>
          </div>
          <SideBarProblemMenu probID={this.props.params.probID} />
      </div>
        <div id="SPLabel">
          Sub problems
        </div>
        <div id="sidebarSB">
          {React.cloneElement(this.props.children, {probID: this.state.probID})}
        </div>

        <div id="tutorialProblemButtonDiv">
          <img src={require('../assets/tutorial.svg')} id="tutorialProblemButton" width="50" height="50" alt="Back arrow, blue up arrow" />
        </div>
        
        <TutorialProblemPage />

      </div>

      </ReactCSSTransitionGroup>
      );
   }
}


 
 