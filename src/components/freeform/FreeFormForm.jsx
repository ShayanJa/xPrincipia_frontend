import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class FreeFormForm extends React.Component {

  constructor(){
  super();

  this.state= {
    freeForm: '',
  }

    this.postFreeForm = this.postFreeForm.bind(this);
  };

postFreeForm() {
  //Read field items into component state
  this.state.freeForm = document.getElementById('freeFormTextArea').value

      axios.post( Config.API + '/auth/freeForms/create', {
      type:'0',
      typeID: this.props.params.probID,
      username: cookie.load('userName'),
      description : this.state.freeForm,
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
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend>FreeForm Discussion</legend>
                         <textarea name="questionText" required="required" id="freeFormTextArea" placeholder="Engage in freeform discussion with your peers about this project. " autoFocus ></textarea>
                         <input type="button" value="Add" onClick={this.postFreeForm} id="askQuestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
   }
