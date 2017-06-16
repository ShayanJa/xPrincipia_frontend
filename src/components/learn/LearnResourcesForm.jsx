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
  this.state.resource = document.getElementById('resourcesTextArea').value

  //if User is on a solution post with type 1
  //solutionID will be available in props
      axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resources/create', {
      type:'0',
      typeID: this.props.params.probID,
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

    componentDidMount(){
        var self = this;
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resources/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    resources: response.data
                })
            }) 
    }
   render() {
           return (
        <div>
            <div id="suggestionFormComponent">
                <form id="suggestionForm">
                    <fieldset>
                        <legend>Add a Resource</legend>
                             {/*<div>
                                <input type="radio" />
                                    <label>Easy</label>
                                <input type="radio" />
                                    <label>Medium</label>
                                <input type="radio" />
                                    <label>Hard</label>
                             </div>*/}
                            <textarea name="suggestionText" required="required" id="resourcesTextArea" autoFocus ></textarea>
                            <br />
                            <input type="button" value="Add" onClick={this.postResource} id="addSuggestion"/>
                    </fieldset>
                </form>
            </div>
        </div>
      );
    }  
}
