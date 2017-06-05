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

    this.postResource = this.postResource.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get('http://localhost:10000/auth/resources/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
          self.setState({
              resources: response.data
          })
          
          document.getElementById('questionEditTextArea').value = self.state.resource.description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

postResource() {
  //Read field items into component state
  this.state.resource = document.getElementById('questionTextArea').value

  axios.post('http://localhost:10000/auth/resources/create', {
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

  
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset id="redFieldset">
                    <legend id="redLegend">Edit Resource</legend>
                         <textarea name="questionText" required="required" id="questionEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.postResource} id="editButton">Edit</div>
                         <Link to='/problem/${resource.TypeID}/resources'>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}