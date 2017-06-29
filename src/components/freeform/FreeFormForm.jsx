import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';

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

      axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/freeForms/create', {
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
                         <textarea name="questionText" required="required" id="freeFormTextArea" autoFocus ></textarea>
                         <br />
                         <input type="button" value="Add" onClick={this.postFreeForm} id="askQuestion"/>
                </fieldset>
            </form>
      </div>

      );
   }
   }
