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
    this.state.field = document.getElementById('problemFieldForm').value
    this.state.description = document.getElementById('problemDescriptionForm').value
    this.state.summary = document.getElementById('problemSummaryForm').value
    this.state.requirements = document.getElementById('problemRequirementsForm').value
    this.state.references = document.getElementById('problemReferencesForm').value
  
    var self = this
    axios.post('http://localhost:10000/auth/problems/create', {
      username: cookie.load('userName'),
      parentID: this.props.params.probID,
      title : this.state.title,
      field: this.state.field,
      summary : this.state.summary,
      description : this.state.description,
     
      requirements: this.state.requirements,
      references: this.state.references
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

                        <label htmlFor="problemFieldForm" id="problemFieldFormLabel">Field<br />
                            <input type="text" name="problemSubject" required="required" maxLength="50" placeholder="Enter field of study here" id="problemFieldForm"/>
                          </label><br />

                        <label htmlFor="problemSummaryForm" id="problemSummaryFormLabel">Summary<br />
                            <textarea name="problemField" required="required" maxLength="250" placeholder="Summarize in 250 characters here." id="problemSummaryForm"/>
                          </label><br />

                        <label htmlFor="problemDescriptionForm" id="problemDescriptionFormLabel">Description<br />
                            <textarea name="problemDescription" required="required" placeholder="Describe the problem in detail here." id="problemDescriptionForm">
                            </textarea></label><br />

                        <label htmlFor="problemRequirementsForm" id="problemRequirementsFormLabel">Requirements<br />
                            <textarea name="problemRequirements" placeholder="List requirements that solutions need to fulfill. Please enter as a list with a space between each requirement. " id="problemRequirementsForm">
                            </textarea></label><br />

                        <label htmlFor="problemReferencesForm" id="problemReferencesFormLabel">References<br />
                            <textarea name="problemReferences" placeholder="Provide your references here." id="problemReferencesForm">
                            </textarea></label><br />

                        <input type="submit" value="Create" onClick={this.postProblem} id="submitProblem"/>
              </fieldset>
            </form>
        </div>
      );
   }
}
