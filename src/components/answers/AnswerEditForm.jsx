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
        return axios.get( Config.API + '/auth/questions/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
          self.setState({
              answers: response.data
          })
          
          document.getElementById('answerEditTextArea').value = self.state.question.description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

updateAnswer() {
  //Read field items into component state
  this.state.question = document.getElementById('questionTextArea').value

  axios.post( Config.API + '/auth/questions/create', {
      type:'0',
      typeID: this.props.questID,
      username: cookie.load('userName'),
      description : this.state.question,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry, there was a problem with your request")
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
                         <div onClick={this.postQuestion} id="editButton">Edit</div>
                         <Link to='/problem/${question.TypeID}/questions'>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}