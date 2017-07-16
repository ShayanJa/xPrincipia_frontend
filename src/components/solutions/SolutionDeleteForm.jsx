import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class SolutionDeleteForm extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      title: '',
      summary: '',
      description: '',
      references: '',
      solutionInfo: '',
    }

    this.deleteSolution = this.deleteSolution.bind(this);
  };

  deleteSolution() {
  
//   Delete proposal
   var self = this
    axios.delete( Config.API + '/auth/solutions/delete?id='+this.props.params.solutionID, {
        params: {
          id: this.props.params.solutionID,
          username: cookie.load('userName')
        }
      })
      .then(function (result) {
      document.location = '/problem/'+ self.props.params.probID + '/solutions/top'
    })
      .catch(function (error) {
        alert("I'm sorry, there was a problem with your request.")
      });
  }

  render() {
      return (
      <div id="createSolutionBox">
          <form id="solutionDeleteForm">
            <fieldset id="editFormFieldset">
                <legend id="redLegend">Delete</legend>
                    <div>Are you sure you would like to delete this proposal?</div>
                    <br />
                    <div onClick={this.deleteSolution} id="deleteButton">Delete</div>
                    <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/full`}>
                        <div id="returnButton">Exit</div>
                    </Link>
            </fieldset>
          </form>
      </div>
      );
   }
}