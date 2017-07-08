import React from 'react';
import axios from 'axios';
import LearnContentUnit1 from '../components/learn/LearnContentUnit1.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class LearnContentContainer1 extends React.Component {
constructor(props){
        super(props);

        this.state = {
            learnItems: []
        }
        
    };
    componentWillMount(){
        var self = this;
            return axios.get( Config.API + '/auth/learnItems/typeID?id='+this.props.params.probID).then(function (response) {
                self.setState({
                    learnItems: response.data
                })
            }) 
        }
   render() {
           return (
        <div id="suggestionContainer">
            {this.props.children}
            <LearnContentUnit1 learnItems={this.state.learnItems} />
            <SideBarMore />
        </div>  
      );
    }  
}
