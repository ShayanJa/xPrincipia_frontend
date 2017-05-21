import React from 'react';
import axios from 'axios';
import WelcomeUnit from '../components/WelcomeUnit.jsx';
import WelcomeMore from '../components/WelcomeMore.jsx';

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
        return axios.get('http://localhost:10000/auth/problems/search?q='+this.state.searchText).then(function (response) {
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
        return axios.get('http://localhost:10000/auth/problems/all').then(function (response) {
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
      <div>
            <div id="welcomeUnitsContainer">
                <ul id="welcomeProblemsUnitList">
                    <li  id="welcomeProblemsUnit">
                        <div id="welcomeProblemsHeader">
                            <div id="welcomeProblemsTitle">
                                Civilization
                            </div>
                        </div>
                    </li>
                    <li  id="welcomeProblemsUnit">
                        <div id="welcomeProblemsHeader">
                            <div id="welcomeProblemsTitle">
                                Evolution
                            </div>
                        </div>
                    </li>
                    <li  id="welcomeProblemsUnit">
                        <div id="welcomeProblemsHeader">
                            <div id="welcomeProblemsTitle">
                                Understanding
                            </div>
                        </div>
                    </li>
                    <li  id="welcomeProblemsUnit">
                        <div id="welcomeProblemsHeader">
                            <div id="welcomeProblemsTitle">
                                Efficiency
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
      </div>
      );
   }
}
