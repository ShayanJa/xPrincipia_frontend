import React from 'react';
import axios from 'axios';
import SuggestionUnit from '../components/SuggestionUnit.jsx';
import SuggestionForm from '../components/SuggestionForm.jsx';
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
        return axios.get('http://ec2-13-58-19-50.us-east-2.compute.amazonaws.com:10000/auth/suggestions/typeID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                suggestions: response.data
            })
        })  
    }
   render() {
      return (
        <div id="suggestionContainer">
            <SuggestionForm probID={this.props.params.probID}/>
            <SuggestionUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      );
   }
}
