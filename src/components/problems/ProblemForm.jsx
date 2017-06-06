import React from 'react';
import { Redirect, Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from 'axios'
import cookie from 'react-cookie'


export default class ProblemForm extends React.Component {

  constructor(){
    super();
    
    //ProblemForm structure in backend
    this.state= {
      title: '',
      field: '',
      description: '',
      summary: '',
      requirements: '',
      references: ''
    }

    this.postProblem = this.postProblem.bind(this);
  };

  postProblem() {
    
    //Read field items into component state
    this.state.title = document.getElementById('problemTitleForm').value
    // this.state.field = document.getElementById('problemFieldForm').value
    this.state.description = document.getElementById('problemDescriptionForm').value
    this.state.references = document.getElementById('problemReferencesForm').value
  
    var self = this
    axios.post('http://localhost:10000/auth/problems/create', {
      username: cookie.load('userName'),
      parentID: this.props.params.probID,
      title : this.state.title,
      description : this.state.description,
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
                  <legend>Create:Problem</legend>
                        <label htmlFor="problemTitleForm" id="problemTitleFormLabel">Title<br />
                            <input type="text" name="problemTitle" required="required" maxLength="140" id="problemTitleForm" autoFocus/>
                          </label><br />

                        <label htmlFor="problemDescriptionForm" id="problemDescriptionFormLabel">Additional Information<br />
                            <textarea name="problemDescription" required="required" maxLength="250" 
                            placeholder="Please add any additional information you'd like. (250 character max.)" id="problemDescriptionForm">
                            </textarea></label><br />

                        <input type="button" value="Create" onClick={this.postProblem} id="submitProblem"/>
              </fieldset>
            </form>
        </div>
      );
   }
}

