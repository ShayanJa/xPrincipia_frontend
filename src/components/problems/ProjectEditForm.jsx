import React from 'react';
import { Redirect, Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class ProjectEditForm extends React.Component {

  constructor(props){
    super(props);
    
    //ProblemForm structure in backend
    this.state= {
      title: '',
      summary: '',
    }

    this.updateProject = this.updateProject.bind(this);
  };

  componentWillMount() {
      var self = this;
      return axios.get( Config.API + '/auth/problems/ID?id='+this.props.params.probID).then(function (response) {
        //if parent ID is 0 then the problem is at the root of the tree
        // return id as the parentID for routing purposes
        //set other data
        self.setState({
            problemInfo: response.data
      })

        document.getElementById('projectEditTitleForm').value = self.state.problemInfo.Title;
        document.getElementById('projectEditSummaryForm').value = self.state.problemInfo.Summary;
  
    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

 updateProject() {
    //Read field items into component state
    this.state.title = document.getElementById('projectEditTitleForm').value
    this.state.summary = document.getElementById('projectEditSummaryForm').value

  var self = this;
  axios.put( Config.API + '/auth/problems/update?id='+this.props.params.probID, {
      username: cookie.load('userName'),
      title : self.state.title,
      summary : self.state.summary
    })
    .then(function (result) {
      document.location = '/problem/'+ self.props.params.probID + '/subproblems'
    })
    .catch(function (error) {
        alert("I'm sorry, there was a problem with your request.")
      });
  
  }

  render() {
      return (
        <div id="createProblemBox">
            <form id="createForm">
              <fieldset>
                  <legend>Edit Project</legend>
                        <Link to={`/problem/${this.props.params.probID}/subproblems`}>
                          <div id="backSolutionArrowDiv">
                              <img src={require('../../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                          </div>
                        </Link>
                        <label htmlFor="problemTitleForm" id="problemTitleFormLabel">Title<br />
                            <input type="text" name="problemTitle" required="required" maxLength="70" id="projectEditTitleForm" autoFocus/>
                          </label><br />

                        <label htmlFor="problemSummaryForm" id="problemSummaryFormLabel">Additional Information<br />
                            <textarea name="problemSummary" required="required" maxLength="350" 
                            placeholder="Please provide any additional information you'd like. (250 character max.)" id="projectEditSummaryForm">
                            </textarea></label><br />

                        <input type="button" value="Edit" onClick={this.updateProject} id="submitProblem"/>
              </fieldset>
            </form>
        </div>
      );
   }
}

