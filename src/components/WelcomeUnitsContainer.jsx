import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import axios from 'axios';
import WelcomeUnit from './WelcomeUnit.jsx';
import WelcomeMore from './WelcomeMore.jsx';

export default class WelcomeUnitsContainer extends React.Component {
 
   constructor(props){
        super(props);

        this.state = {
            problems: []
        }
        
    };
        componentWillMount(){
        var self = this;
        return axios.get('http://localhost:10000/problems/all').then(function (response) {
            console.log(response.data[0].Title)
            self.setState({
                problems: response.data
            })
        })  
    }
 
   render() {
      return (
        <div id="welcomeUnitsContainer">
          <WelcomeUnit problems={this.state.problems} />
          <WelcomeMore />
        </div>
      );
   }
}
