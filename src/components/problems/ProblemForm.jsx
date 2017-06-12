import React from 'react';
import { Redirect, Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';


export default class ProblemForm extends React.Component {

  constructor(){
    super();
    
    //ProblemForm structure in backend
    this.state= {
      title: '',
      // field: '',
      summary: '',
    }

    this.postProblem = this.postProblem.bind(this);
  };

  postProblem() {
    
    //Read field items into component state
    this.state.title = document.getElementById('problemTitleForm').value
    // this.state.field = document.getElementById('problemFieldForm').value
    this.state.summary = document.getElementById('problemSummaryForm').value
    // this.state.references = document.getElementById('problemReferencesForm').value
  
    var self = this
    axios.post('http://localhost:10000/auth/problems/create', {
      username: cookie.load('userName'),
      parentID: this.props.params.probID,
      title : this.state.title,
      summary : this.state.summary,
    })
    .then(function (result) {
      //redirect back to the last page     
      document.location = '/problem/'+self.props.params.probID+'/subproblems'
    })
    .catch(function (error) {
      console.log(error.response.data)
      alert( error.response.data)
    });
  };

  render() {
      return (
        <div id="createProblemBox">
            <form id="createForm">
              <fieldset>
                  <legend>Create:Sub Project</legend>
                        <Link to={`/problem/${this.props.params.probID}/subproblems`}>
                          <div id="backSolutionArrowDiv">
                              <img src={require('../../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                          </div>
                        </Link>
                        <label htmlFor="problemTitleForm" id="problemTitleFormLabel">Title<br />
                            <input type="text" name="problemTitle" required="required" maxLength="140" id="problemTitleForm" autoFocus/>
                          </label><br />

                        <label htmlFor="problemSummaryForm" id="problemSummaryFormLabel">Additional Information<br />
                            <textarea name="problemSummary" required="required" maxLength="250" 
                            placeholder="Please provide any additional information you'd like. (250 character max.)" id="problemSummaryForm">
                            </textarea></label><br />

                        <input type="button" value="Create" onClick={this.postProblem} id="submitProblem"/>
              </fieldset>
            </form>
        </div>
      );
   }
}

