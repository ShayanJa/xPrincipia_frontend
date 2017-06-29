import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class LearnResourcesEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    resource: '',
  }

    this.updateResource = this.updateResource.bind(this);
  };

  componentWillMount(){
      var self = this; ///TODO Change Resouces to resources when backend Changes
        return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resouces/ID?id='+this.props.params.resourceID).then(function (response) {
          self.setState({
              resource: response.data
          })
        
        document.getElementById('questionEditTextArea').value = self.state.resource.Description;

    })
    .catch(function (error) {
        // if(error.response.status === 401 || error.response.status === 403){
        //     document.location = "/login"
        // }
    });   
  }

updateResource() {
  //Read field items into component state
  this.state.resource = document.getElementById('questionEditTextArea').value
  console.log(this.state.resource)
  var self = this
  axios.put('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resources/update', {
      type:'0',
      typeID: self.props.probID,
      username: cookie.load('userName'),
      description : self.state.resource,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
    }

  
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset id="redFieldset">
                    <legend id="redLegend">Edit Resource</legend>
                         <textarea name="questionText" required="required" id="questionEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.updateResource} id="editButton">Edit</div>
                         <Link to={`/problem/${this.state.resource.TypeID}/resources`}>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}