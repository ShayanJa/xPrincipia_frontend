import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';

export default class LearnContentDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    learnItem: '',
  }

    this.postLearnItem = this.postLearnItem.bind(this);
  };

postLearnItem() {
  //Read field items into component state
  this.state.learnItem = document.getElementById('questionTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
  if(this.props.solutionID){
    axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/learnItems/create', {
    type:'1',
    typeID: this.props.solutionID,
    username: cookie.load('userName'),
    description : this.state.learnItem,
  })
    .then(function (result) {
      document.location = window.location.pathname 
    })
    .catch(function (error) {
      alert("I'm sorry there was a problem with your request")
      });
    } 

    //else post to problem
    //probID will be used
    else {
      axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/learnItems/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.learnItem,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
    }

  }
  



   render() {
      return (
      <div id="questionFormComponent">
            <form id="questionForm">
                <fieldset>
                    <legend>Delete Learn Content</legend>
                         <div>Are you sure you would like to delete this learning content?</div>
                         <br />
                         <div onClick={this.postLearnItem} id="deleteButton">Delete</div>
                         <Link to='/problem/${learnItem.TypeID}/learnItems'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
