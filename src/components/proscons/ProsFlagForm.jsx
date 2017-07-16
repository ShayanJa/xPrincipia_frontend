import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class ProsFlagForm extends React.Component {

  constructor(){
  super();

  this.state= {
    pro: '',
  }

    this.postPro = this.postPro.bind(this);
  };

postPro() {
  //Read field items into component state
  this.state.pro = document.getElementById('questionTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
  if(this.props.solutionID){
    axios.post( Config.API + '/auth/pros/create', {
    type:'1',
    typeID: this.props.solutionID,
    username: cookie.load('userName'),
    description : this.state.pro,
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
      axios.post( Config.API + '/auth/pros/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.pro,
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
                         <div onClick={this.postPro} id="flagButton">Submit</div>
                         <Link to='/problem/${pro.TypeID}/pros'>
                            <div id="returnButton">Exit</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
