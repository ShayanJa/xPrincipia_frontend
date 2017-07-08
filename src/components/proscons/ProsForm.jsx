import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class ProsForm extends React.Component {

constructor(){
  super();

  this.state= {
    pro: '',
  }

  this.postPro = this.postPro.bind(this);
};

postPro() {
  //Read field items into component state
this.state.pro = document.getElementById('proTextArea').value

 axios.post( Config.API + '/auth/pros/create', {
    username: cookie.load('userName'),
    type:'1',
    typeID: this.props.params.solutionID,
    description : this.state.pro,
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

      <div id="suggestionFormComponent">
            <form id="suggestionForm">
                <fieldset>
                    <legend>Pros</legend>
                         <textarea name="suggestionText" required="required" id="proTextArea" autoFocus ></textarea>
                         <input type="button" value="Add" onClick={this.postPro} id="addProsCons"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
