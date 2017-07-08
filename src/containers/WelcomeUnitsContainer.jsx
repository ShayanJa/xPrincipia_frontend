import React from 'react';
import axios from 'axios';
import WelcomeUnit from '../components/welcome/WelcomeUnit.jsx';
import WelcomeUserUnit from '../components/welcome/WelcomeUserUnit.jsx';
import WelcomeMore from '../components/welcome/WelcomeMore.jsx';
import {Config} from '../../config.js'

export default class WelcomeUnitsContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           problems : [],
           searchText: [],
        }
        this.queryProblem = this.queryProblem.bind(this)
    };


     queryProblem () {
         //get search text box data
        this.state.searchText = document.getElementById('exploreInput').value

        var self = this
        return axios.get( Config.API + '/auth/problems/search?q='+this.state.searchText).then(function (response) {
            self.setState({
              problems: response.data
            })
        })
        .catch(function (error) {
            if(error.response.status === 401 || error.response.status === 403) {
                document.location = "/login"
            }
        }); 
        }
        componentWillMount(){
        var self = this;
        return axios.get( Config.API + '/auth/problems/all').then(function (response) {
            self.setState({
                problems: response.data
            })
        }) 
        .catch(function (error) {
            if(error.response.status === 401 || error.response.status === 403){
                document.location = "/login"
            }
        }); 
        }
 
   render() {
      return (
      <div id="invisible">
            {/*<div id="welcomeUnitsContainer">
                <WelcomeUnit problems={this.state.problems} />
            </div>
            <div id="welcomeUnitsContainer">
                <WelcomeUserUnit problems={this.state.problems} />
            </div>*/}
      </div>
      );
   }
}



