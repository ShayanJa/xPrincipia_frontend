import React from 'react';
import { Link } from 'react-router';
import $ from 'min-jquery';

export default class ProblemForm extends React.Component {

  constructor(){
    super();

    this.state= {
      title: '',
      field: '',
      description: '',
      summary: '',
      requirements: '',
      references: ''
    }

    this.postSolution = this.postSolution.bind(this);
  };

  postSolution() {
    //Read field items into component state
    this.state.title = document.getElementById('problemTitleForm').value
    this.state.field = document.getElementById('problemFieldForm').value
    this.state.description = document.getElementById('problemDescriptionForm').value
    this.state.requirements = document.getElementById('problemRequirementsForm').value
    this.state.references = document.getElementById('problemReferencesForm').value

  //Ajax post solution request
  $.ajax({
    crossDomain: 'true',
    type: 'POST',
    headers: {'Content-Type' : 'application/json'},
    url: 'http://localhost:10000/problems/create',
    processData: false,
    data: JSON.stringify({
      'title' : this.state.title,
      'field': this.state.field,
      'summary': this.state.summary,
      'description' : this.state.description,
      'requirements' : this.state.requirements,
      'references' : this.state.references,
    }),
    success: function(result){
      console.log(result)

      alert('Your solution has been posted.')
    },
    error: function(result){
      console.log(result)

      alert('There was an error.')
    },

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
                            <textarea name="problemField" required="required" maxLength="140" placeholder="Summarize in 140 characters here." id="problemSummaryForm"/>
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

                        <Link to={`/problem/${this.props.probID}/subproblems`}><input type="submit" value="Create" onClick={this.postProblem} id="submitProblem"/></Link>
              </fieldset>
            </form>
        </div>
      );
   }
}
