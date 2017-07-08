import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class LearnContentEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    learnItem: '',
  }

    this.updateLearnItem = this.updateLearnItem.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get( Config.API + '/auth/learnItems/ID?id='+this.props.params.learnItemID).then(function (response) {
          self.setState({
              learnItem: response.data
          })
          
          document.getElementById('questionEditTextArea').value = self.state.learnItem.Description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

updateLearnItem() {
  //Read field items into component state
  this.state.learnItem = document.getElementById('questionEditTextArea').value
  console.log(this.state.learnItem)
  var self = this
  axios.put( Config.API + '/auth/learnItems/update?id='+this.props.params.learnItemID, {
      type:'0',
      typeID: this.props.params.probID,
      username: cookie.load('userName'),
      description : self.state.learnItem,
    })
      .then(function (result) {
        document.location = '/problem/'+ self.props.params.probID + '/learn/content'
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
    }

  
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset id="redFieldset">
                    <legend id="redLegend">Edit Learn Content</legend>
                         <textarea name="questionText" required="required" id="questionEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.updateLearnItem} id="editButton">Edit</div>
                          <Link to={`/problem/${this.state.learnItem.TypeID}/learn/content`}>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}