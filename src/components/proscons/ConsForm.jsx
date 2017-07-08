import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class ConsForm extends React.Component {

constructor(){
  super();

  this.state= {
    con: '',
  }

  this.postCon = this.postCon.bind(this);
};

postCon() {
  //Read field items into component state
this.state.con = document.getElementById('conTextArea').value

  axios.post( Config.API + '/auth/cons/create', {
      username: cookie.load('userName'),
      type:'1',
      typeID: this.props.params.solutionID,
      description : this.state.con,
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

      <div id="suggestionFormComponent">
            <form id="suggestionForm">
                <fieldset>
                    <legend>Cons</legend>
                         <textarea name="suggestionText" required="required" id="conTextArea" autoFocus ></textarea>
                         <input type="button" value="Add" onClick={this.postCon} id="addProsCons"/>
                </fieldset>
            </form>
      </div>

      );
   }
}
