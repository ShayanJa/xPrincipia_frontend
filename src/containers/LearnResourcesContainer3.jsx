import React from 'react';
import axios from 'axios';
import LearnResourcesUnit3 from '../components/learn/LearnResourcesUnit3.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class LearnResourcesContainer3 extends React.Component {
constructor(props){
        super(props);

        this.state = {
            suggestions: []
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/suggestions/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            })  
        } else {
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/suggestions/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div>
        <div id="suggestionContainer">
                <div id="suggestionFormComponent">
            <form id="suggestionForm">
                <fieldset>
                    <legend>Complexity 3 Resources</legend>
                         <textarea name="suggestionText" required="required" id="suggestionTextArea" autoFocus ></textarea>
                         <br />
                         <input type="button" value="Add" onClick={this.postSuggestion} id="addSuggestion"/>
                </fieldset>
            </form>
      </div>
            <LearnResourcesUnit3 suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>  
        </div>
      );
    }  
}