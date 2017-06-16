import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {browserHistory } from 'react-router';

export default class FreeFormDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    freeForm: '',
  }

    this.deleteFreeform = this.deleteFreeform.bind(this);
  };

deleteFreeform() {
//Delete question
    axios.delete('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/freeForm/delete?id='+this.props.params.freeFormID, {
      params: {
        id: this.props.params.freeFormID,
        username: cookie.load('userName')
      }
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
                <fieldset>
                    <legend>Delete Free Form</legend>
                         <div>Are you sure you would like to delete this Discussion Item?</div>
                         <br />
                         <Link to='/problem/${freeForm.TypeID}/freeForms'><div onClick={this.deleteFreeform} id="deleteButton">Delete</div> </Link>
                         <Link to='/problem/${freeForm.TypeID}/freeForms'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
