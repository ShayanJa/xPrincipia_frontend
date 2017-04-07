import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SuggestionUnit from './SuggestionUnit.jsx';
import SuggestionForm from './SuggestionForm.jsx';
import SideBarMore from './SideBarMore.jsx';


export default class SuggestionContainer extends React.Component {
constructor(props){
        super(props);

        this.state = {
            suggestions: []
        }
        
    };
        componentDidMount(){
        var self = this;
        return axios.get('http://localhost:10000/suggestions/all').then(function (response) {
            console.log(response.data[0].Title)
            self.setState({
                suggestions: response.data
            })
        })  
    }
   render() {
      return (
        <div id="suggestionContainer">
            <SuggestionForm />
            <SuggestionUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      );
   }
}
