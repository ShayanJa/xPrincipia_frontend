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
      references: ''
    }

    this.postSolution = this.postSolution.bind(this);
  };

  postSolution() {
    //Read field items into component state
    this.state.title = document.getElementById('solutionTitleForm').value
    this.state.summary = document.getElementById('solutionSummaryForm').value
    this.state.description = document.getElementById('solutionDescriptionForm').value
    this.state.references = document.getElementById('solutionReferencesForm').value

  axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/create', {
      username: cookie.load('userName'),
      problemID:this.props.params.probID,
      title : this.state.title,
      summary : this.state.summary,
      description : this.state.description,
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
          <form id="createForm">
            <fieldset>
              <Link to={`/problem/${this.props.params.probID}/solutions`}>
                <div id="backSolutionArrowDiv">
                    <img src={require('../../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                </div>
              </Link>
              <label htmlFor="solutionTitle" id="solutionTitleFormLabel">Title<br />
                  <input type="text" name="solutionTitle" required="required" maxLength="140" id="solutionTitleForm" autoFocus/>
                </label><br />

              <label htmlFor="solutionSummary" id="solutionSummaryFormLabel">Summary<br />
                  <textarea name="solutionSummary" required="required" maxLength="400" placeholder="Summarize your proposal here. (250 characters)" id="solutionSummaryForm"/>
                </label><br />

              <label htmlFor="solutionDescription" id="solutionDescriptionFormLabel">Description<br />
                  <textarea name="solutionDescription" required="required" placeholder="Describe your proposal here." id="solutionDescriptionForm">
                  </textarea></label><br />

              <label htmlFor="solutionReferences" id="solutionReferenceFormLabel">References<br />
                  <textarea name="solutionReferences" placeholder="Please provide any references here." id="solutionReferencesForm">
                  </textarea></label><br />
              <Link to={`/problem/${this.props.params.probID}/solutions`}><input type="submit" value="Create" onClick={this.postSolution} id="submitSolution"/></Link>
            </fieldset>
          </form>
      </div>
      );
   }
}
