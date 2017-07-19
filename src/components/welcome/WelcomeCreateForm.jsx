import React from 'react';
import { Link } from 'react-router';
import axios from 'axios'
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class WelcomeCreateForm extends React.Component {

  constructor(){
    super();
    
    //ProblemForm structure in backend
    this.state= {
      title: '',
      field: '',
      description: '',
      summary: '',
    }

    this.postProblem = this.postProblem.bind(this);
    // this.toggle = this.toggle.bind(this);
  };

  postProblem() {
    //Read field items into component state
    this.state.title = document.getElementById('problemTitleForm').value
    // this.state.field = document.getElementById('problemFieldForm').value
    this.state.summary = document.getElementById('problemSummaryForm').value
    // this.state.description = document.getElementById('problemDescriptionForm').value
    var self = this
    return axios.post( Config.API + '/auth/problems/create', {
        username: cookie.load('userName'),
        parentID: this.props.params.probID,
        title : this.state.title,
        summary : this.state.summary,
        

      })
      .then(function (response) {
        document.location = '/welcome' 
      })
      .catch(function (error) {
        console.log(error.response.data)
        alert( error.response.data)
      });
    };

// toggle() {
//   $(document).ready(function(){
// $("welcomeMore").click(function(){
//     $("welcomeMoreX").toggle(1000);
//     });
//   });
// }


  render() {
      return (
      <div>
        {/*<div id="createWelcomeButtonBox">
          <Link to="/welcome/create" activeClassName="activeBlue">
            <h1 id="createWelcomeButton">Create a Project</h1>
          </Link>
        </div>*/}
        <div id="createProblemBox">
            <form id="welcomeCreateForm">
              <fieldset>
                  {/*<legend>Create:Project</legend>*/}
                        <div id="createWelcomeButtonFormBox">
                          <Link to="/welcome/" activeClassName="activeBlue">
                            <h1 id="createWelcomeButtonForm">Create a Project</h1>
                          </Link>
                        </div>
                        <label htmlFor="problemTitleForm" id="problemTitleFormLabel">Title<br />
                            <input type="text" name="problemTitle" required="required" maxLength="70" id="problemTitleForm" autoFocus/>
                          </label><br />

                        <label htmlFor="problemSummaryForm" id="problemSummaryFormLabel">Additional Information<br />
                            <textarea name="problemField" required="required" maxLength="250" placeholder="Please provide any additional information you'd like. (250 character max.)" id="problemSummaryForm"/>
                          </label><br />

                        <input type="button" value="Create" onClick={this.postProblem} id="submitProblem"/>
              </fieldset>
            </form>
            {/*<Link to='/welcome'><div id="welcomeMore">Back</div></Link>*/}
            {/*<div id="welcomeMore" onClick={this.toggle}>Toggle</div>*/}
        </div>
      </div>
      );
   }
}

