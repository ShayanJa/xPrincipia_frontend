import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class EditSolutionForm extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      title: '',
      summary: '',
      description: '',
      references: '',
      solutionInfo: '',
    }

    this.updateSolution = this.updateSolution.bind(this);
  };
  componentWillMount(){
      var self = this;
      return axios.get( Config.API + '/auth/solutions/ID?id='+this.props.params.solutionID).then(function (response) {
          //if parent ID is 0 then the problem is at the root of the tree
          // return id as the parentID for routing purposes
          //set other data
          self.setState({
              solutionInfo: response.data
          })
          
          document.getElementById('solutionEditTitleForm').value = self.state.solutionInfo.Title;
          document.getElementById('solutionEditSummaryForm').value = self.state.solutionInfo.Summary;
          document.getElementById('solutionEditDescriptionForm').value = self.state.solutionInfo.Description;
          document.getElementById('solutionEditReferencesForm').value = self.state.solutionInfo.References;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

    updateSolution() {
    //Read field items into component state
    this.state.title = document.getElementById('solutionEditTitleForm').value
    this.state.summary = document.getElementById('solutionEditSummaryForm').value
    this.state.description = document.getElementById('solutionEditDescriptionForm').value
    this.state.references = document.getElementById('solutionEditReferencesForm').value

  var self = this;
  axios.put( Config.API + '/auth/solutions/update?id='+this.props.params.solutionID, {
      username: cookie.load('userName'),
      title : self.state.title,
      summary : self.state.summary,
      description : self.state.description,
      references: self.state.references
    })
    .then(function (result) {
     document.location = window.location.pathname

    })
    .catch(function (error) {
        alert("I'm sorry, there was a problem with your request.")
      });
  
  }

  render() {
      return (
      <div id="createSolutionBox">
          <form id="solutionEditForm">
            <fieldset id="editFormFieldset">
                <legend>Edit Proposal</legend>
                      
                      <label htmlFor="solutionTitle" id="editTitleFormLabel">Title<br />
                         <input type="text" name="solutionTitle" required="required" maxLength="140" id="solutionEditTitleForm" autoFocus/>
                      </label><br />

                      <label htmlFor="solutionSummary" id="editSummaryFormLabel">Summary<br />
                         <textarea name="solutionSummary" required="required" maxLength="400" placeholder="Summarize in 250 characters here." id="solutionEditSummaryForm"/>
                      </label><br />

                      <label htmlFor="solutionDescription" id="editDescriptionFormLabel">Description<br />
                          <textarea name="solutionDescription" required="required" placeholder="Describe in detail here." id="solutionEditDescriptionForm">
                          </textarea></label><br />

                      <label htmlFor="solutionReferences" id="editReferencesFormLabel">References<br />
                          <textarea name="solutionReferences" placeholder="Provide your references here." id="solutionEditReferencesForm">
                          </textarea></label><br />

                      <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/full`}>
                        <div onClick={this.updateSolution} id="editButton">Edit</div>
                      </Link>
                      <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/full`}>
                        <div id="returnButton">Exit</div>
                      </Link>
            </fieldset>
          </form>
      </div>
      );
   }
}
