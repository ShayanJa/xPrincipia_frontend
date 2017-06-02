import React from 'react';
import axios from 'axios';
import LearnResourcesUnit1 from './LearnResourcesUnit1.jsx';
import SideBarMore from '../SideBarMore.jsx';


export default class LearnContentForm extends React.Component {
constructor(props){
        super(props);

        this.state = {
            suggestions: []
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://localhost:10000/auth/suggestions/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            })  
        } else {
            return axios.get('http://localhost:10000/auth/suggestions/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    suggestions: response.data
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
                            <input type="button" value="Add" onClick={this.postSuggestion} id="addSuggestion"/>
                    </fieldset>
                </form>
            </div>
        </div>
      );
    }  
}
