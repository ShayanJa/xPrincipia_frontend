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

    this.updateSolution = this.updateSolution.bind(this);
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
          
          document.getElementById('editTitleForm').value = self.state.solutionInfo.Title;
          document.getElementById('editSummaryForm').value = self.state.solutionInfo.Summary;
          document.getElementById('editDescriptionForm').value = self.state.solutionInfo.Description;
          document.getElementById('editReferencesForm').value = self.state.solutionInfo.References;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

  updateSolution() {
    //Read field items into component state
    this.state.title = document.getElementById('editTitleForm').value
    this.state.summary = document.getElementById('editSummaryForm').value
    this.state.description = document.getElementById('editDescriptionForm').value
    this.state.references = document.getElementById('editReferencesForm').value

  var self = this;
  axios.put('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/update?id='+this.props.params.solutionID, {
      username: cookie.load('userName'),
      title : self.state.title,
      summary : self.state.summary,
      description : self.state.description,
      evidence: self.state.references
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
            <fieldset id="editFormFieldset">
                <legend>Edit</legend>
                      
                      <label htmlFor="solutionTitle" id="editTitleFormLabel">Title<br />
                         <input type="text" name="solutionTitle" required="required" maxLength="140" id="editTitleForm" autoFocus/>
                      </label><br />

                      <label htmlFor="solutionSummary" id="editSummaryFormLabel">Summary<br />
                         <textarea name="solutionSummary" required="required" maxLength="400" placeholder="Summarize in 250 characters here." id="editSummaryForm"/>
                      </label><br />

                      <label htmlFor="solutionDescription" id="editDescriptionFormLabel">Description<br />
                          <textarea name="solutionDescription" required="required" placeholder="Describe in detail here." id="editDescriptionForm">
                          </textarea></label><br />

                      <label htmlFor="solutionReferences" id="editReferencesFormLabel">References<br />
                          <textarea name="solutionReferences" placeholder="Provide your references here." id="editReferencesForm">
                          </textarea></label><br />
                      <Link to={`/problem/${this.props.params.probID}/solutions`}>
                        <input type="submit" value="Update" onClick={this.updateSolution} id="submitNewVersion"/>
                      </Link>
            </fieldset>
          </form>
      </div>
      );
   }
}
