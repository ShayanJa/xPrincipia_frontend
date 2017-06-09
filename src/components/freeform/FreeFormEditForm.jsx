import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class FreeFormEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    freeForm: '',
  }

    this.updateFreeForm = this.updateFreeForm.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get('http://localhost:10000/auth/freeForms/ID?id='+this.props.params.freeID).then(function (response) {
          self.setState({
              freeForm: response.data
          })
          
          document.getElementById('freeFormEditTextArea').value = self.state.freeForm.Description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

updateFreeForm() {
  //Read field items into component state
  this.state.freeForm = document.getElementById('freeFormEditTextArea').value

  axios.put('http://localhost:10000/auth/freeForms/update?id='+this.props.params.freeID, {
      type:'0',
      typeID: this.props.params.probID,
      username: cookie.load('userName'),
      description : this.state.freeForm,
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
                <fieldset id="redFieldset">
                    <legend id="redLegend">Edit FreeForm Comment</legend>
                         <textarea name="questionText" required="required" id="freeFormEditTextArea" autofocus ></textarea>
                         <br />
                         <Link to='/problem/${freeForm.TypeID}/freeForms'>
                            <div onClick={this.updateFreeForm} id="editButton">Edit</div>
                         </Link>
                         <Link to='/problem/${freeForm.TypeID}/freeForms'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}