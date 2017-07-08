import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class VersionForm extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      title: '',
      summary: '',
      description: '',
      references: '',
      solutionInfo: '',
    }

    this.postSolution = this.postSolution.bind(this);
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
          
          document.getElementById('versionDescriptionForm').value = self.state.solutionInfo.Description;
          document.getElementById('versionReferencesForm').value = self.state.solutionInfo.References;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

  postSolution() {
    //Read field items into component state
    this.state.title = document.getElementById('solutionTitleForm').value
    this.state.summary = document.getElementById('solutionSummaryForm').value
    this.state.description = document.getElementById('solutionDescriptionForm').value
    this.state.references = document.getElementById('solutionReferencesForm').value

  axios.post( Config.API + '/auth/solutions/create', {
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
          <form id="createVersionForm">
            <fieldset id="versionFormFieldset">
                <legend>Develop</legend>
                      <label htmlFor="solutionDescription" id="versionChangesFormLabel">Changes from v.112<br />
                          <textarea name="solutionDescription" required="required" placeholder='This allows users to see your updates.' id="versionChangesForm">
                          </textarea></label><br />

                      <label htmlFor="solutionDescription" id="solutionDescriptionFormLabel">Description<br />
                          <textarea name="solutionDescription" required="required" placeholder="Describe in detail here." id="versionDescriptionForm">
                          </textarea></label><br />

                      <label htmlFor="solutionReferences" id="solutionReferenceFormLabel">References<br />
                          <textarea name="solutionReferences" placeholder="Provide your references here." id="versionReferencesForm">
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
