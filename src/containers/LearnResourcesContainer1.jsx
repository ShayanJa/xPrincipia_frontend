import React from 'react';
import axios from 'axios';
import LearnResourcesUnit1 from '../components/learn/LearnResourcesUnit1.jsx';
import SideBarMore from '../components/SideBarMore.jsx';


export default class LearnResourcesContainer1 extends React.Component {
constructor(props){
        super(props);

        this.state = {
            resources: []
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resources/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    resources: response.data
                })
            })  
        } else {
            return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/resources/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    resources: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div>
        <div id="suggestionContainer">
            {this.props.children}
            <LearnResourcesUnit1 resources={this.state.resources} />
            <SideBarMore />
        </div>  
        </div>
      );
    }  
}
