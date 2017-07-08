import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Config} from '../../config.js'

export default class LearnContentDeleteForm extends React.Component {

  constructor(){
  super();

  this.state= {
    learnItem: '',
  }

    this.deleteLearnItem = this.deleteLearnItem.bind(this);
  };

deleteLearnItem() {
//Delete question
      var self = this
      axios.delete( Config.API + '/auth/learnItems/delete?', {
        params: {
          id: this.props.params.learnItemID,
          username: cookie.load('userName')
        }
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
                <fieldset>
                    <legend>Delete Learn Content</legend>
                         <div>Are you sure you would like to delete this learning content?</div>
                         <br />
                         <div onClick={this.deleteLearnItem} id="deleteButton">Delete</div>
                         <Link to='/problem/${learnItem.TypeID}/learnItems'>
                            <div id="returnButton">Return</div>
                         </Link>
                </fieldset>
            </form>
      </div>

      );
   }
}
