import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class SuggestionDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    question: '',
  }

    this.deleteSuggestion = this.deleteSuggestion.bind(this);
  };

deleteSuggestion() {
//Delete question
    axios.delete('http://localhost:10000/auth/suggestions/delete?id='+this.props.params.suggID, {
      params: {
        id: this.props.params.suggID,
        username: cookie.load('userName')
      }
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
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend>Delete Suggestion</legend>
                         <div>Are you sure you would like to delete this suggestion?</div>
                         <br />
                         <div onClick={this.deleteSuggestion} id="deleteButton">Delete</div>
                         <Link to={`/problem/${this.props.params.probID}/suggestion`}>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}



