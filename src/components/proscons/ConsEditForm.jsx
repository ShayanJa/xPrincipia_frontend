import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class ConsEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    con: '',
  }

    this.updateCon = this.updateCon.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get( Config.API + '/auth/cons/ID?id='+this.props.params.conID).then(function (response) {
          self.setState({
              con: response.data
          })
          
          document.getElementById('conEditTextArea').value = self.state.con.Description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

updateCon() {
  //Read field items into component state
  this.state.con = document.getElementById('conEditTextArea').value

  axios.put( Config.API + '/auth/cons/update?id='+this.props.params.conID, {
      type:'1',
      typeID: this.props.params.solutionID,
      username: cookie.load('userName'),
      description : this.state.con,
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
                    <legend id="redLegend">Edit Con</legend>
                         <textarea name="questionText" required="required" id="conEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.updateCon} id="editButton">Edit</div>
                         <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/pros`}>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}