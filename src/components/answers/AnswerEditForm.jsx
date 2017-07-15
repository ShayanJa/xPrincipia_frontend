import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class AnswerEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    answer: '',
  }

    this.updateAnswer = this.updateAnswer.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get( Config.API + '/auth/answers/ID?id='+this.props.params.answerID).then(function (response) {
          self.setState({
              answer: response.data
          })
          
          document.getElementById('answerEditTextArea').value = self.state.answer.Description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

updateAnswer() {
  //Read field items into component state
  this.state.answer = document.getElementById('answerEditTextArea').value

  axios.put( Config.API + '/auth/answers/update?id='+this.props.params.answerID, {
      type:'4',
      typeID: this.props.params.questID,
      username: cookie.load('userName'),
      description : this.state.answer,
    })
      .then(function (result) {
        // document.location = '/problem/' + self.props.params.probID + '/question/' + self.props.params.questID + '/answers'
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry, there was a problem with your request. ")
      });
    }

  
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset id="redFieldset">
                    <legend id="redLegend">Edit Answer</legend>
                         <textarea name="questionText" required="required" id="answerEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.updateAnswer} id="editButton">Edit</div>
                         <Link to={`/problem/${this.props.params.probID}/question/${this.props.params.questID}/answers`}>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}