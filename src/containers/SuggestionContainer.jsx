import React from 'react';
import axios from 'axios';
import SuggestionUnit from '../components/suggestions/SuggestionUnit.jsx';
import SuggestionForm from '../components/suggestions/SuggestionForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class SuggestionContainer extends React.Component {
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
        //If user is on fullsolution make use solutionID
       if (this.props.params.solutionID){
           return (
        <div id="suggestionContainer">
          <SuggestionForm  solutionID={this.props.params.solutionID}/>
            <SuggestionUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      
      );

       } else {
           return (
        <div id="suggestionContainer">
          <SuggestionForm probID={this.props.params.probID}  />
            <SuggestionUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      
      );

       }
      
   }
}
