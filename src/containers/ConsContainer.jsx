import React from 'react';
import axios from 'axios';
import ConsForm from '../components/proscons/ConsForm.jsx';
import ConsUnit from '../components/proscons/ConsUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class ConsContainer extends React.Component {
constructor(props){
        super(props);

        this.state = {
            cons: []
        }
        
    };

    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/cons/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    cons: response.data
                })
            })  
        } else {
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/cons/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    cons: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div id="suggestionContainer">
          {this.props.children}
            <ConsUnit cons={this.state.cons} />
            <SideBarMore />
        </div>    
      );
   }
}