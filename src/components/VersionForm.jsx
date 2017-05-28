import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


export default class VersionForm extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      title: '',
      summary: '',
      description: '',
      evidence: '',
      experiments: '',
      references: ''
    }

    this.postSolution = this.postSolution.bind(this);
  };

  postSolution() {
    //Read field items into component state
    this.state.title = document.getElementById('solutionTitleForm').value
    this.state.summary = document.getElementById('solutionSummaryForm').value
    this.state.description = document.getElementById('solutionDescriptionForm').value
    this.state.evidence = document.getElementById('solutionEvidenceForm').value
    this.state.experiments = document.getElementById('solutionExperimentsForm').value
    this.state.references = document.getElementById('solutionReferencesForm').value

  axios.post('http://localhost:10000/auth/solutions/create', {
      username: cookie.load('userName'),
      problemID:this.props.params.probID,
      title : this.state.title,
      summary : this.state.summary,
      description : this.state.description,
      evidence: this.state.evidence,
      experiments : this.state.experiments,
      references: this.state.references
    })
    .then(function (result) {
      document.location = window.location.pathname 
    })
    .catch(function (error) {
        alert("There was an error.")
      });
  
  }

  render() {
      return (
      <div id="createSolutionBox">
          <form id="createVersionForm">
            <fieldset id="versionFormFieldset">
                <legend>Develop</legend>
                      <label htmlFor="solutionDescription" id="solutionDescriptionFormLabel">Changes from v.112<br />
                          <textarea name="solutionDescription" required="required" placeholder="This allows users to see your updates." id="versionChangesForm">
                          </textarea></label><br />

                      <label htmlFor="solutionDescription" id="solutionDescriptionFormLabel">Description<br />
                          <textarea name="solutionDescription" required="required" placeholder="Describe in detail here." id="solutionDescriptionForm">
                          </textarea></label><br />

                      <label htmlFor="solutionEvidence" id="solutionEvidenceFormLabel">Evidence/Logic<br />
                          <textarea name="solutionEvidence" placeholder="Provide your evidence and logic here." id="solutionEvidenceForm">
                          </textarea></label><br />

                      <label htmlFor="futureExperiments" id="solutionExperimentsFormLabel">Future Experiments<br />
                          <textarea name="futureExperiments" placeholder="Outline future experiment ideas here." id="solutionExperimentsForm">
                          </textarea></label><br />

                      <label htmlFor="solutionReferences" id="solutionReferenceFormLabel">References<br />
                          <textarea name="solutionReferences" placeholder="Provide your references here." id="solutionReferencesForm">
                          </textarea></label><br />
                      <Link to={`/problem/${this.props.params.probID}/solutions`}>
                        <input type="submit" value="Create" onClick={this.postSolution} id="submitNewVersion"/>
                      </Link>
            </fieldset>
          </form>
      </div>
      );
   }
}
