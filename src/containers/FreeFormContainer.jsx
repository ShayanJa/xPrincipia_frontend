import React from 'react';
import axios from 'axios';
import FreeFormUnit from '../components/FreeFormUnit.jsx';
import FreeFormForm from '../components/FreeFormForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class FreeFormContainer extends React.Component {
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
          <FreeFormForm  solutionID={this.props.params.solutionID}/>
            <FreeFormUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      
      );

       } else {
           return (
        <div id="suggestionContainer">
          <FreeFormForm probID={this.props.params.probID}  />
            <FreeFormUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>
      
      );

       }
      
   }
}
