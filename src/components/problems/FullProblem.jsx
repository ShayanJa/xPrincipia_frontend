import React from 'react';
import { Link  } from 'react-router';
import axios from 'axios';
import Footer from '../../containers/Footer.jsx';
import cookie from 'react-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import SideBarProblemMenu from './SideBarProblemMenu.jsx';
import TutorialProjectContent from '../tutorials/TutorialProjectContent.jsx';
import {Config} from '../../config.js'

export default class FullProblem extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            problemInfo: [],
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
            alert("unvote I'm sorry, there was a problem with your request. ")
        })
        
    }

   render() {

			function refreshPage() {
				// Temporary fix for refreshing sub problems
				// document.location = '/problem/'+ self.props.params.probID +'/subproblems';
					 FullProblem.forceUpdate()
			}

       if (this.state.vote ===true && this.state.problemInfo.OriginalPosterUsername === cookie.load('userName')) {
           return (

      <div id="maxContainerColumn">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
        <div id="problemRow1">

          {/*Used for standard site*/}
          <Link to={`/problem/${this.state.problemInfo.ParentID}/subproblems`} onClick={refreshPage}>
            <div id="SPParent">
              <img src={require('../../assets/parent3.svg')} width="70" height="70" alt="Parent button, blue connection symbol" />
            </div>
          </Link>

          {/*Used for mobile, not shown otherwise*/}
          {/*<div id="SPParent2Div">*/}
          <Link to={`/problem/${this.state.problemInfo.ParentID}/subproblems`} onClick={refreshPage}>
            <div id="SPParent2">
                <img src={require('../../assets/upArrow.svg')} width="250" height="50" alt="Back arrow, blue up arrow" />
            </div>
          </Link>
          {/*</div>*/}

          <div id="problemIntro">
            <h1 id="problemTitle">{this.state.problemInfo.Title}</h1>
            <div id="projectCreator">
              {this.state.problemInfo.OriginalPosterUsername}
            </div>
            <Link to={`/problem/${this.props.params.probID}/edit`}>
              <img src={require('../../assets/editBlue.svg')} id="editProjectButton" width="20" height="20" alt="Edit Button" />
            </Link>
          </div>
        </div>
        <div id="problemRow2">
          <div id="fullProblem">
            <div id="problemAdditionalInfoLabel">Additional Information
            </div>
            <p id="problemSummary">
              {this.state.problemInfo.Summary}
            </p>
            <Link to={`/problem/${this.props.params.probID}/create`} activeClassName="activeBlueText">
              <div id="createSPButtonBox">
                <h1 id="createSPButton">Create a Sub Project</h1>
              </div>
            </Link>
          </div>
          <div id="columnContainer">
            {/*<div id="fullProblemHeader">*/}
              <div  id="problemPercent">
                <span id="bigPercentInactive">{floatToDecimal(this.state.problemInfo.PercentRank)}</span>%
              </div> 
              
                    <div id="sidebarMenu">
                      <Link to={`/problem/${this.props.params.probID}/subproblems`}>
                        <div id="votedProblem" onClick={this.unVote}>Voted</div>
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
      </div>)
       } else if(this.state.problemInfo.OriginalPosterUsername === cookie.load('userName')) {
           return (

      <div id="maxContainerColumn">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
        <div id="problemRow1">

          <Link to={`/problem/${this.state.problemInfo.ParentID}/subproblems`} onClick={refreshPage}>
            <div id="SPParent">
              <img src={require('../../assets/parent3.svg')} width="70" height="70" alt="Parent button, blue connection symbol" />
            </div>
          </Link>

          {/*Used for mobile, not shown otherwise*/}
            <Link to={`/problem/${this.state.problemInfo.ParentID}/subproblems`} onClick={refreshPage}>
              <div id="SPParent2">
                <img src={require('../../assets/upArrow.svg')} width="250" height="50" alt="Parent button, blue connection symbol" />
              </div>
            </Link>

          <div id="problemIntro">
            <h1 id="problemTitle">{this.state.problemInfo.Title}</h1>
            <div id="projectCreator">
              {this.state.problemInfo.OriginalPosterUsername}
            </div>
            <Link to={`/problem/${this.props.params.probID}/edit`}>
              <img src={require('../../assets/editBlue.svg')} id="editProjectButton" width="20" height="20" alt="Edit Button" />
            </Link>
          </div>
        </div>
        <div id="problemRow2">
          <div id="fullProblem">
            <div id="problemAdditionalInfoLabel">Additional Information
            </div>
            <p id="problemSummary">
              {this.state.problemInfo.Summary}
            </p>
            <Link to={`/problem/${this.props.params.probID}/create`} activeClassName="activeBlueText">
              <div id="createSPButtonBox">
                <h1 id="createSPButton">Create a Sub Project</h1>
              </div>
            </Link>
          </div>
          <div id="columnContainer">
            {/*<div id="fullProblemHeader">*/}
              <div  id="problemPercent">
                <span id="bigPercentInactive">{floatToDecimal(this.state.problemInfo.PercentRank)}</span>%
              </div> 
              
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
      </div>)
       } else if(this.state.vote === true) {
         return (
          <div id="maxContainerColumn">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
        <div id="problemRow1">
          <Link to={`/problem/${this.state.problemInfo.ParentID}/subproblems`} onClick={refreshPage}>
            <img src={require('../../assets/parent3.svg')} id="SPParent" width="70" height="70" alt="Back arrow, blue up arrow" />
          </Link>

          {/*Used for mobile*/}
          <div id="SPParent2Div">
            <Link to={`/problem/${this.state.problemInfo.ParentID}/subproblems`} onClick={refreshPage}>
                <img src={require('../../assets/upArrow.svg')} id="SPParent2" width="250" height="50" alt="Back arrow, blue up arrow" />
            </Link>
          </div>

          <div id="problemIntro">
            <h1 id="problemTitle">{this.state.problemInfo.Title}</h1>
            <div id="projectCreator">
              {this.state.problemInfo.OriginalPosterUsername}
            </div>
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
              <div  id="problemPercent">
                <span id="bigPercentInactive">{floatToDecimal(this.state.problemInfo.PercentRank)}</span>%
              </div> 
              
                    <div id="sidebarMenu">
                      <Link to={`/problem/${this.props.params.probID}/subproblems`}>
                        <div id="votedProblem" onClick={this.unVote}>Voted</div>
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

    else {
      return (
            <div id="maxContainerColumn">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>
        <div id="problemRow1">
          <Link to={`/problem/${this.state.problemInfo.ParentID}/subproblems`} onClick={refreshPage}>
            <div id="SPParent">
              <img src={require('../../assets/parent3.svg')} width="70" height="70" alt="Parent button, blue connection symbol" />
            </div>
          </Link>

          {/*Used for mobile*/}
          <div id="SPParent2Div">
            <Link to={`/problem/${this.state.problemInfo.ParentID}/subproblems`} onClick={refreshPage}>
              <div id="SPParent2">
                <img src={require('../../assets/upArrow.svg')} width="250" height="50" alt="Parent button, blue connection symbol" />
              </div>
            </Link>
          </div>

          <div id="problemIntro">
            <h1 id="problemTitle">{this.state.problemInfo.Title}</h1>
            <div id="projectCreator">
              {this.state.problemInfo.OriginalPosterUsername}
            </div>
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
              <div  id="problemPercent">
                <span id="bigPercentInactive">{floatToDecimal(this.state.problemInfo.PercentRank)}</span>%
              </div> 
              
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
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100);
}
 
 