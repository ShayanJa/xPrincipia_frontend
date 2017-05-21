import React from 'react';
import { Link } from 'react-router';
import axios from 'axios'
import cookie from 'react-cookie'

export default class WelcomeCreateForm extends React.Component {

  constructor(){
    super();
    
    //ProblemForm structure in backend
    this.state= {
      title: '',
      field: '',
      description: '',
      summary: '',
      requirements: '',
      references: ''
    }

    this.postProblem = this.postProblem.bind(this);
  };

  postProblem() {
    //Read field items into component state
    this.state.title = document.getElementById('problemTitleForm').value
    this.state.field = document.getElementById('problemFieldForm').value
    this.state.summary = document.getElementById('problemSummaryForm').value
  
  axios.post('http://localhost:10000/auth/problems/create', {
      username: cookie.load('userName'),
      parentID: this.props.params.probID,
      title : this.state.title,
      field: this.state.field,
      summary : this.state.summary,
     
    })
    .then(function (result) {
      
    })
    .catch(function (error) {
      console.log(error.response.data)
      alert( error.response.data)
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

                        <label htmlFor="problemSummaryForm" id="problemSummaryFormLabel">Additional Info<br />
                            <textarea name="problemField" required="required" maxLength="250" placeholder="Optional: Provide any additional information, in 250 characters." id="problemSummaryForm"/>
                          </label><br />

                        <Link to={`/welcome`}><input type="submit" value="Create" onClick={this.postProblem} id="submitWelcomeProblem"/></Link>
              </fieldset>
            </form>
            <Link to='/welcome'><div id="welcomeMore">Back</div></Link>
        </div>
      );
   }
}
