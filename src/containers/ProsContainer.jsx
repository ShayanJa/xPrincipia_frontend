import React from 'react';
import axios from 'axios';
import ProsForm from '../components/ProsForm.jsx';
import ProsUnit from '../components/ProsUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class ProsContainer extends React.Component {
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
        <div id="suggestionContainer">
          <ProsForm probID={this.props.params.probID}  />
            <ProsUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>    
      );
   }
}