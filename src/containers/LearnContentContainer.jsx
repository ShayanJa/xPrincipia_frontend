import React from 'react';
import axios from 'axios';
import LearnContentUnit from '../components/SuggestionUnit.jsx';
import LearnContentForm from '../components/SuggestionForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class LearnContentContainer extends React.Component {
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
          <LearnContentForm  solutionID={this.props.params.solutionID}/>
            <LearnContentUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      
      );

       } else {
           return (
        <div id="suggestionContainer">
          <LearnContentForm probID={this.props.params.probID}  />
            <LearnContentUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      
      );

       }
      
   }
}
