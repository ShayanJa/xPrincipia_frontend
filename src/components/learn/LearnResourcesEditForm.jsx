import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

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
        return axios.get( Config.API + '/auth/resources/ID?id='+this.props.params.resourceID).then(function (response) {
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
  this.state.resource = document.getElementById('questionEditTextArea').value

  axios.put( Config.API + '/auth/resources/update?id='+this.props.params.resourceID, {
      type:'0',
      typeID: this.props.params.probID,
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

  
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset id="redFieldset">
                    <legend id="redLegend">Edit Resource</legend>
                         <textarea name="questionText" required="required" id="questionEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.updateResource} id="editButton">Submit</div>
                         <Link to={`/problem/${this.state.resource.TypeID}/learn/resources`}>
                          <div id="returnButton">Exit</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}