import React from 'react';
import axios from 'axios';
import ProsForm from '../components/proscons/ProsForm.jsx';
import ProsUnit from '../components/proscons/ProsUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class ProsContainer extends React.Component {
constructor(props){
        super(props);

        this.state = {
            pros: []
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/pros/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    pros: response.data
                })
            })  
        } else {
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/pros/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    pros: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div id="suggestionContainer">
          {this.props.children}
            <ProsUnit pros={this.state.pros} />
            <SideBarMore />
        </div>    
      );
   }
}