import React from 'react';
import axios from 'axios';
import ConsForm from '../components/proscons/ConsForm.jsx';
import ConsUnit from '../components/proscons/ConsUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class ConsContainer extends React.Component {
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
          <ConsForm probID={this.props.params.probID} solutionID={this.props.params.solutionID} />
            <ConsUnit suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>    
      );
   }
}