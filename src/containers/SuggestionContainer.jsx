import React from 'react';
import axios from 'axios';
import SuggestionUnit from '../components/suggestions/SuggestionUnit.jsx';
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
        <div id="suggestionContainer">
            {this.props.children}
            <SuggestionUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      
      );
      
   }
}
