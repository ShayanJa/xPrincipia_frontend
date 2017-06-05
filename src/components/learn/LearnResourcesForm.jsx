import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import LearnResourcesUnit1 from './LearnResourcesUnit1.jsx';
import SideBarMore from '../SideBarMore.jsx';


export default class LearnResourcesForm extends React.Component {
constructor(props){
        super(props);

        this.state = {
            resources: []
        }
            this.postResource = this.postResource.bind(this);
        
    };
    postResource() {
  //Read field items into component state
  this.state.resource = document.getElementById('questionTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
  if(this.props.solutionID){
    axios.post('http://localhost:10000/auth/resources/create', {
    type:'1',
    typeID: this.props.solutionID,
    username: cookie.load('userName'),
    description : this.state.resource,
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
      axios.post('http://localhost:10000/auth/resources/create', {
      type:'0',
      typeID: this.props.probID,
      username: cookie.load('userName'),
      description : this.state.resource,
    })
      .then(function (result) {
        document.location = window.location.pathname 
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
    }

  }
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://localhost:10000/auth/resources/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    resources: response.data
                })
            })  
        } else {
            return axios.get('http://localhost:10000/auth/resources/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    resources: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div>
            <div id="suggestionFormComponent">
                <form id="suggestionForm">
                    <fieldset>
                        <legend>Create Content</legend>
                             <div class="radio-group">
                                <input type="radio" id="option-one" name="selector" />
                                    <label for="option-one">Easy</label>
                                <input type="radio" id="option-two" name="selector" />
                                    <label for="option-two">Medium</label>
                                <input type="radio" id="option-three" name="selector" />
                                    <label for="option-three">Hard</label>
                             </div>
                            <textarea name="suggestionText" required="required" id="suggestionTextArea" autoFocus ></textarea>
                            <br />
                            <input type="button" value="Add" onClick={this.postResource} id="addSuggestion"/>
                    </fieldset>
                </form>
            </div>
        </div>
      );
    }  
}
