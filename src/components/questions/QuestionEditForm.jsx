import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class QuestionEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    question: '',
  }

    this.updateQuestion = this.updateQuestion.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get( Config.API + '/auth/questions/ID?id='+this.props.params.questID).then(function (response) {
          self.setState({
              question: response.data
          })
          
          document.getElementById('questionEditTextArea').value = self.state.question.Description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

updateQuestion() {
  //Read field items into component state
  this.state.question = document.getElementById('questionEditTextArea').value

  axios.put( Config.API + '/auth/questions/update?id='+this.props.params.questID, {
      type:'0',
      typeID: this.props.params.probID,
      username: cookie.load('userName'),
      description : this.state.question,
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
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend id="redLegend">Edit Question</legend>
                         <textarea name="questionText" required="required" id="questionEditTextArea" autoFocus ></textarea>
                         <br />
                         <Link to={`/problem/${this.state.question.TypeID}/questions`}>
                            <div onClick={this.updateQuestion} id="editButton">Submit</div>
                         </Link>
                         <Link to={`/problem/${this.state.question.TypeID}/questions`}>
                          <div id="returnButton">Exit</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}