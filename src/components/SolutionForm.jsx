import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


export default class SolutionForm extends React.Component {

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

  axios.post('http://ec2-13-58-19-50.us-east-2.compute.amazonaws.com/auth/solutions/create', {
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
      
    })
    .catch(function (error) {
      });
  
  }

  render() {
      return (
      <div id="createSolutionBox">
          <form id="createForm">
            <fieldset>
                <legend>Create: Solution</legend>
                      <label htmlFor="solutionTitle" id="solutionTitleFormLabel">Title<br />
                          <input type="text" name="solutionTitle" required="required" maxLength="140" id="solutionTitleForm" autoFocus/>
                        </label><br />

                      <label htmlFor="solutionSummary" id="solutionSummaryFormLabel">Summary<br />
                          <textarea name="solutionSummary" required="required" maxLength="250" placeholder="Summarize in 250 characters here." id="solutionSummaryForm"/>
                        </label><br />

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
                      <Link to={`/problem/${this.props.params.probID}/solutions`}><input type="submit" value="Create" onClick={this.postSolution} id="submitSolution"/></Link>
            </fieldset>
          </form>
      </div>
      );
   }
}
