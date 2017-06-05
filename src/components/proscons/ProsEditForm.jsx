import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class ProsEditForm extends React.Component {

  constructor(){
  super();

  this.state= {
    pro: '',
  }

    this.postPro = this.postPro.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get('http://localhost:10000/auth/pros/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
          self.setState({
              pros: response.data
          })
          
          document.getElementById('questionEditTextArea').value = self.state.pro.description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

postPro() {
  //Read field items into component state
  this.state.pro = document.getElementById('questionTextArea').value

  axios.post('http://localhost:10000/auth/pros/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.pro,
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
                    <legend id="redLegend">Edit Pro</legend>
                         <textarea name="questionText" required="required" id="questionEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.postPro} id="editButton">Edit</div>
                         <Link to='/problem/${pro.TypeID}/pros'>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}