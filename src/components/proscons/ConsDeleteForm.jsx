import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class ConsDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    con: '',
  }

    this.postCon = this.postCon.bind(this);
  };

postCon() {
  //Read field items into component state
  this.state.con = document.getElementById('questionTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
  if(this.props.solutionID){
    axios.post( Config.API + '/auth/cons/create', {
    type:'1',
    typeID: this.props.solutionID,
    username: cookie.load('userName'),
    description : this.state.con,
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
      axios.post( Config.API + '/auth/cons/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.con,
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
            <form id="questionForm">
                <fieldset>
                    <legend>Delete Con</legend>
                         <div>Are you sure you would like to delete this Con?</div>
                         <br />
                         <div onClick={this.postCon} id="deleteButton">Delete</div>
                         <Link to='/problem/${con.TypeID}/cons'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
