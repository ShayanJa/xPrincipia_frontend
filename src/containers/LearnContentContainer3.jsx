import React from 'react';
import axios from 'axios';
import LearnContentUnit3 from '../components/learn/LearnContentUnit3.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class LearnContentContainer3 extends React.Component {
constructor(props){
        super(props);

        this.state = {
            suggestions: []
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get( Config.API + '/auth/suggestions/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            })  
        } else {
            return axios.get( Config.API + '/auth/suggestions/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div id="suggestionContainer">
            <div id="suggestionFormComponent">
                    <form id="suggestionForm">
                        <fieldset>
                            <legend>Complexity 3 Content</legend>
                                <textarea name="suggestionText" required="required" id="suggestionTextArea" autoFocus ></textarea>
                                <br />
                                <input type="button" value="Add" onClick={this.postSuggestion} id="addSuggestion"/>
                        </fieldset>
                    </form>
            </div>
            <LearnContentUnit3 suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>  
      );
    }  
}