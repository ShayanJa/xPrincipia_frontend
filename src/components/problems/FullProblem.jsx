import React from 'react';
import { Link  } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import SideBarProblemMenu from './SideBarProblemMenu.jsx';
import TutorialProjectContent from '../tutorials/TutorialProjectContent.jsx';


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
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/problems/ID?id='+this.props.params.probID).then(function (response) {
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
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/problems/ID?id='+newProps.params.probID).then(function (response) {
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
       axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/vote/create', {
           Type: 0,
           TypeID: this.state.problemInfo.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            // document.location = "/problem/" + self.state.parentID + "/subproblems";
          return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/problems/ID?id='+self.props.params.probID).then(function (response) {
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
            })
          })
          alert("Thank you, your vote has been recorded.")
        })
        .catch(function (error) {
            alert("I'm sorry, you have already voted on a problem.");
        })
  }

   render() {

      return (

      <div id="maxContainerColumn">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
        <div id="problemRow1">
          <Link to={`/problem/${this.state.parentID}/subproblems`}>
            <img src={require('../../assets/parent3.svg')} id="SPParent" width="70" height="70" alt="Back arrow, blue up arrow" />
          </Link>

          {/*Used for mobile*/}
          <Link to={`/problem/${this.state.parentID}/subproblems`}>
              <img src={require('../../assets/upArrow.svg')} id="SPParent2" width="70" height="70" align="middle" alt="Back arrow, blue up arrow" />
          </Link>

          <div id="problemIntro">
            <h1 id="problemTitle">{this.state.problemInfo.Title}</h1>
          </div>
        </div>
        <div id="problemRow2">
          <div id="fullProblem">
            <div id="problemAdditionalInfoLabel">Additional Information</div>
            <p id="problemSummary">
              {this.state.problemInfo.Summary}
            </p>
            <div id="createSPButtonBox">
              <Link to={`/problem/${this.props.params.probID}/create`} activeClassName="activeBlue">
                <h1 id="createSPButton">Create a Sub Project</h1>
              </Link>
            </div>
          </div>
          <div id="columnContainer">
            {/*<div id="fullProblemHeader">*/}
              <div  id="problemPercent">{floatToDecimal(this.state.problemInfo.PercentRank)}</div> 
              
                    <div id="sidebarMenu">
                      <Link to={`/problem/${this.props.params.probID}/subproblems`}>
                        <div id="followProblem" onClick={this.submitVote}>Vote</div>
                      </Link>
                      <Link to={`/problem/${this.props.params.probID}/solutions/top`}>
                        <div id="SBButton">Proposals</div>
                      </Link>

                      <Link to={`/problem/${this.props.params.probID}/questions`}>
                        <div id="SBButton">Discuss</div>
                      </Link>

                      <Link to={`/problem/${this.props.params.probID}/learn/resources`}>
                        <div id="SBButton">Learn</div>
                      </Link>

                      {/*<Link to={`/problem/${this.props.probID}/theory`}>
                        <div id="SBButton">Theory</div>
                      </Link> */}

                    </div>
                    {/*Used for mobile*/}
                    <div id="createSPButtonBox2">
                      <Link to={`/problem/${this.props.params.probID}/create`} activeClassName="activeBlue">
                        <h1 id="createSPButton">Create a Sub Project</h1>
                      </Link>
                    </div>
              
            {/*</div>*/}
            {/*<SideBarProblemMenu probID={this.props.params.probID} />*/}
          </div>
      </div>
        {/*<div id="SPLabel">
          Sub Projects
        </div>*/}
        <div id="sidebarSB">
          {React.cloneElement(this.props.children, {probID: this.state.probID})}
        </div>

        {/*<div id="tutorialProblemButtonDiv">
          <img src={require('../../assets/tutorial.svg')} id="tutorialProblemButton" width="50" height="50" alt="Back arrow, blue up arrow" />
        </div>*/}
        
        <TutorialProjectContent />
        </ReactCSSTransitionGroup>
      </div>

      
      );
   }
}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}
 
 