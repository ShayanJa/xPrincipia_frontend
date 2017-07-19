import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

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

    var self = this
    axios.post( Config.API + '/auth/solutions/create', {
        username: cookie.load('userName'),
        problemID:this.props.params.probID,
        title : this.state.title,
        summary : this.state.summary,
        description : this.state.description,
        references: this.state.references
      })
      .then(function (result) {
        document.location = '/problem/' + self.props.params.probID + '/solutions/top'
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
              {/*<Link to={`/problem/${this.props.params.probID}/solutions`}>
                <div id="backSolutionArrowDiv">
                    <img src={require('../../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                </div>
              </Link>*/}
              <label htmlFor="solutionTitle" id="solutionTitleFormLabel">Title<br />
                  <input type="text" name="solutionTitle" required="required" maxLength="140" id="solutionTitleForm" autoFocus/>
                </label><br />

              <label htmlFor="solutionSummary" id="solutionSummaryFormLabel">Summary<br />
                  <textarea name="solutionSummary" required="required" maxLength="400" placeholder="Please summarize your proposal here. (400 character max)" id="solutionSummaryForm"/>
                </label><br />

              <label htmlFor="solutionDescription" id="solutionDescriptionFormLabel">Description<br />
                  <textarea name="solutionDescription" required="required" placeholder="Please describe your proposal here." id="solutionDescriptionForm">
                  </textarea></label><br />

              <label htmlFor="solutionReferences" id="solutionReferenceFormLabel">References<br />
                  <textarea name="solutionReferences" placeholder="Please provide any references here." id="solutionReferencesForm">
                  </textarea></label><br />
              {/*<Link to={`/problem/${this.props.params.probID}/solutions`}>*/}
                <input type="submit" value="Create" onClick={this.postSolution} id="submitSolution"/>
              {/*</Link>*/}
            </fieldset>
          </form>
      </div>
      );
   }
}
