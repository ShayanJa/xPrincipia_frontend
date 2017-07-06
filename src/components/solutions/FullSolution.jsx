import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class FullSolution extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutionInfo: [],
        }

        this.submitVote = this.submitVote.bind(this)
    };
    //initialize the component with this state
    componentDidMount(){
      var self = this;
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/ID?id='+this.props.params.solutionID).then(function (response) {
          self.setState({
              solutionInfo: response.data,
          })
          var solutionInfo = self.state.solutionInfo
          solutionInfo.CreatedAt = dateTime(solutionInfo.CreatedAt)
          self.setState({
              solutionInfo : solutionInfo
          })

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
    }
  //On recieving new props
  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/ID?id='+newProps.params.solutionID).then(function (response) {
          self.setState({
              solutionInfo: response.data,  
          })
          var solutionInfo = self.state.solutionInfo
          solutionInfo.CreatedAt = dateTime(solutionInfo.CreatedAt)
          self.setState({
              solutionInfo : solutionInfo
          })

    })
    .catch(function (error) {
        // if(error.response.status === 401 || error.response.status === 403){
        //     document.location = "/login"
        // }
    }); 

  }
  submitVote() {
       axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/vote/create', {
           Type: 1,
           TypeID: this.state.solutionInfo.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
            alert("Thank you, your vote has been recorded.");
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a solution.");
        })
  }
   render() {
      return (
      <div id="maxContainer"> 
        <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false}>
        <div id="fullSolution">
            <div id="solutionIntro">
                <Link to={`/problem/${this.props.params.probID}/solutions`}>
                    <div id="backSolutionArrowDiv">
                        <img src={require('../../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                    </div>
                </Link>
                <h1 id="solutionTitle">{this.state.solutionInfo.Title}</h1>
                <div id="proposalCreator">{this.state.solutionInfo.OriginalPosterUsername}</div>
                {/*<div id="currentVersion">v.112</div>*/}
                <p id="solutionSummary">
                {this.state.solutionInfo.Summary}
                </p>
            </div>
            {React.cloneElement(this.props.children, {solutionInfo: this.state.questions})}
        </div>
        </ReactCSSTransitionGroup>
      </div>
      );
   }
}



 function dateTime(str){
     return str.substring(0,9)
 }
