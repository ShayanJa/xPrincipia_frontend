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
      return axios.get('http://localhost:10000/auth/solutions/ID?id='+this.props.params.solutionID).then(function (response) {
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

  postSolution() {
    //Read field items into component state
    this.state.title = document.getElementById('solutionTitleForm').value
    this.state.summary = document.getElementById('solutionSummaryForm').value
    this.state.description = document.getElementById('solutionDescriptionForm').value
    this.state.references = document.getElementById('solutionReferencesForm').value

  axios.post('http://localhost:10000/auth/solutions/create', {
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
            <fieldset id="editFormFieldset">
                <legend>Improve</legend>
                      
                      <label htmlFor="solutionTitle" id="editTitleFormLabel">Title<br />
                         <input type="text" name="solutionTitle" required="required" maxLength="140" id="editTitleForm" autoFocus/>
                      </label><br />

                      <label htmlFor="solutionSummary" id="editSummaryFormLabel">Summary<br />
                         <textarea name="solutionSummary" required="required" maxLength="400" placeholder="Summarize in 250 characters here." id="editSummaryForm"/>
                      </label><br />

                      <label htmlFor="solutionDescription" id="editDescriptionFormLabel">Description<br />
                          <textarea name="solutionDescription" required="required" placeholder="Describe in detail here." id="editDescriptionForm">
                          </textarea></label><br />

                      <label htmlFor="solutionReferences" id="editReferenceFormLabel">References<br />
                          <textarea name="solutionReferences" placeholder="Provide your references here." id="editReferencesForm">
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
