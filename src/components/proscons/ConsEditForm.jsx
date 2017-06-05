import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class ConsEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    con: '',
  }

    this.postCon = this.postCon.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get('http://localhost:10000/auth/cons/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
          self.setState({
              cons: response.data
          })
          
          document.getElementById('questionEditTextArea').value = self.state.con.description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

postCon() {
  //Read field items into component state
  this.state.con = document.getElementById('questionTextArea').value

  axios.post('http://localhost:10000/auth/cons/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.con,
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
                <fieldset id="redFieldset">
                    <legend id="redLegend">Edit Con</legend>
                         <textarea name="questionText" required="required" id="questionEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.postCon} id="editButton">Edit</div>
                         <Link to='/problem/${con.TypeID}/cons'>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}