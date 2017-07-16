import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class ProsDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    pro: '',
  }

    this.deletePro = this.deletePro.bind(this);
  };

  deletePro() {
  
  //Delete question
      var self = this
      axios.delete( Config.API + '/auth/pros/delete?id='+this.props.params.proID, {
        params: {
          id: this.props.params.questID,
          username: cookie.load('userName')
        }
      })
      .then(function (result) {
        document.location = '/fullsolution/'+ self.props.params.probID + '/' + self.props.params.solutionID + '/pros'
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
                    <legend>Delete Pro</legend>
                         <div>Are you sure you would like to delete this Pro?</div>
                         <br />
                         <div onClick={this.deletePro} id="deleteButton">Delete</div>
                         <Link to='/problem/${pro.TypeID}/pros'>
                            <div id="returnButton">Exit</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
