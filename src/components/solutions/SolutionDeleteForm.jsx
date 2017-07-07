import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


export default class EditSolutionForm extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      title: '',
      summary: '',
      description: '',
      references: '',
      solutionInfo: '',
    }

    this.updateSolution = this.updateSolution.bind(this);
  };

  deleteSolution() {
  
  //Delete question
   var self = this
    axios.delete('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/delete?id='+this.props.params.solutionID, {
        params: {
          id: this.props.params.questID,
          username: cookie.load('userName')
        }
      })
      .then(function (result) {
        document.location = '/problem/'+ self.props.params.probID + '/solutions/top'
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
  }

  render() {
      return (
      <div id="createSolutionBox">
          <form id="createForm">
            <fieldset id="editFormFieldset">
                <legend id="redLegend">Delete</legend>
                    <div>Are you sure you would like to delete this proposal?</div>
                    <br />
                    <div onClick={this.deleteSolution} id="deleteButton">Delete</div>
                    <Link to={`/problem/${this.props.params.probID}/questions`}>
                    <div id="returnButton">Return</div>
                    </Link>
            </fieldset>
          </form>
      </div>
      );
   }
}