import React from 'react';
import axios from 'axios';
import FreeFormUnit from '../components/freeform/FreeFormUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class FreeFormContainer extends React.Component {
constructor(props){
        super(props);

        this.state = {
            freeForms: []
        }
        
    };
    componentDidMount(){
        var self = this;
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/freeForms/typeID?id='+this.props.params.probID).then(function (response) {
                self.setState({
                    freeForms: response.data
                })
            }) 
    }
   render() {
        //If user is on fullsolution make use solutionID
    return (
        <div id="suggestionContainer">
          {this.props.children}
            <FreeFormUnit freeForms={this.state.freeForms} />
            <SideBarMore />
        </div>
      
      );
   }
}
