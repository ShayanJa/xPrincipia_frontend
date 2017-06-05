import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class FreeFormFlagForm extends React.Component {

  constructor(){
  super();

  this.state= {
    freeForm: '',
  }

    this.postFreeForm = this.postFreeForm.bind(this);
  };

postFreeForm() {
  //Read field items into component state
  this.state.freeForm = document.getElementById('questionTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
  if(this.props.solutionID){
    axios.post('http://localhost:10000/auth/freeForms/create', {
    type:'1',
    typeID: this.props.solutionID,
    username: cookie.load('userName'),
    description : this.state.freeForm,
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
      axios.post('http://localhost:10000/auth/freeForms/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.freeForm,
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
            <form id="flagForm">
                <fieldset>
                    <legend>Reason for Flag</legend>
                         <textarea name="questionText" required="required" id="questionFlagTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.postFreeForm} id="flagButton">Submit</div>
                         <Link to='/problem/${freeForm.TypeID}/freeform'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
