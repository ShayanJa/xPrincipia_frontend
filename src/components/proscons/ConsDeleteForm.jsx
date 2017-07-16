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

    this.deleteCon = this.deleteCon.bind(this);
  };

  deleteCon() {
  
  //Delete question
      var self = this
      axios.delete( Config.API + '/auth/cons/delete?id='+this.props.params.conID, {
        params: {
          id: this.props.params.conID,
          username: cookie.load('userName')
        }
      })
      .then(function (result) {
        document.location = '/fullsolution/'+ self.props.params.probID + '/' + self.props.params.solutionID + '/cons'
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
                    <legend>Delete Con</legend>
                         <div>Are you sure you would like to delete this Con?</div>
                         <br />
                         <div onClick={this.deleteCon} id="deleteButton">Delete</div>
                         <Link to={`/fullsolution/${this.props.params.probID}/${this.props.solutionID}/cons`}>
                            <div id="returnButton">Exit</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
