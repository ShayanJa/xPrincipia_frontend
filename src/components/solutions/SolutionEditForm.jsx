import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


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

    this.postSolution = this.postSolution.bind(this);
  };
  componentWillMount(){
      var self = this;
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/ID?id='+this.props.params.solutionID).then(function (response) {
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
        alert("I'm sorry, there was a problem with your request.")
      });
  
  }

  render() {
      return (
      <div id="createSolutionBox">
          <form id="createForm">
            <fieldset id="editFormFieldset">
                <legend>Edit</legend>
                      
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
                      <Link to={`/problem/${this.props.params.probID}/solutions`}>
                        <input type="submit" value="Create" onClick={this.postSolution} id="submitNewVersion"/>
                      </Link>
            </fieldset>
          </form>
      </div>
      );
   }
}
