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

    this.updatePro = this.updatePro.bind(this);
  };

  componentWillMount(){
      var self = this;
        return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/pros/ID?id='+this.props.params.proID).then(function (response) {
          self.setState({
              pro: response.data
          })
          
          document.getElementById('proEditTextArea').value = self.state.pro.Description;

    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
  }

updatePro() {
  //Read field items into component state
  this.state.pro = document.getElementById('proEditTextArea').value

  axios.put('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/pros/update?id='+this.props.params.proID, {
      type:'1',
      typeID: this.props.params.solutionID,
      username: cookie.load('userName'),
      description : this.state.pro,
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
                    <legend id="redLegend">Edit Pro</legend>
                         <textarea name="questionText" required="required" id="proEditTextArea" autoFocus ></textarea>
                         <br />
                         <div onClick={this.updatePro} id="editButton">Edit</div>
                         <Link to='/problem/${pro.TypeID}/pros'>
                          <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}