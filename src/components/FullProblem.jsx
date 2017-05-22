import React from 'react';
import { Link  } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie'

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
            alert("I'm sorry, you've already voted on a problem.");
        })
  }

   render() {

      return (
      <div id="maxContainer">
        <div id="problemIntro">
          <h1 id="problemTitle">{this.state.problemInfo.Title}</h1>
          <div id="followProblem" onClick={this.submitVote}>Vote</div>
          <div id="contributor">{this.state.problemInfo.OriginalPosterUsername}</div>
          <div id="createDate">{this.state.problemInfo.CreatedAt}</div>
        </div>
        <div id="problemWSB">
          <div id="fullProblem">
            <div id="problemHeader">
              <Link to={`/problem/${this.state.parentID}/solutions`}>
                <div id="parentButton">
                  <img src={require('../assets/deleteLogo.png')} id="deleteLogo" width="10" height="10" alt="Delete Button, Red X" />
                </div>
              </Link>
            </div>
            <h1 id="problemSummaryLabel">Additional Info</h1>
            <p id="problemSummary">
              {this.state.problemInfo.Summary}
            </p>
          </div>
          <div id="sidebar">
            {React.cloneElement(this.props.children, {probID: this.state.probID})}
          </div>
        </div>
        <div>
            Sub Problem Circles Here{/*SubProblems Here seperate column*/}
        </div>
      </div>
      );
   }
}


 
 