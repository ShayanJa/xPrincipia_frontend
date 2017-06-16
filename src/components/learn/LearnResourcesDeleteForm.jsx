import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class LearnResourcesDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    resource: '',
  }

    this.postResource = this.postResource.bind(this);
  };

postResource() {
  //Read field items into component state
  this.state.resource = document.getElementById('questionTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
  if(this.props.solutionID){
    axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resources/create', {
    type:'1',
    typeID: this.props.solutionID,
    username: cookie.load('userName'),
    description : this.state.resource,
  })
    .then(function (result) {
      document.location = window.location.pathname 
    })
    .catch(function (error) {
      alert("I'm sorry there was a problem with your request")
      });
    } 

    //else post to problem
    //probID will be used
    else {
      axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resources/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.resource,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
    }

  }
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend>Delete Resource</legend>
                         <div>Are you sure you would like to delete this resource?</div>
                         <br />
                         <div onClick={this.postResource} id="deleteButton">Delete</div>
                         <Link to='/problem/${resource.TypeID}/resources'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
